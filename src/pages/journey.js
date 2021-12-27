import { NextSeo } from 'next-seo'

// --- Components
import Card from 'components/Card'
import Layout from 'components/Layout'
import PageHeading from 'components/PageHeading'

// --- Other
import { getAllLogbook } from 'lib/contentful'
import { ogImageUrl } from 'lib/helper'

const url = 'https://onur.dev/journey'
const title = 'Journey — Onur Şuyalçınkaya'

const Journey = ({ allLogbook }) => {
  console.log(`allLogbook`, allLogbook)

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title,
          images: [
            {
              url: ogImageUrl('**Journey**'),
              alt: title
            }
          ]
        }}
      />
      <Layout>
        <PageHeading heading="Journey" />
        <div className="flex flex-col space-y-12 items-stretch">
          {allLogbook.map((item, itemIndex) => (
            <div key={`data_${itemIndex}`} className="space-y-6">
              <div className="flex items-center">
                <h2 className="text-2xl slashed-zero">{item.year}</h2>
                {/* <hr className="border-dashed border-gray-400 flex-1 ml-4 my-0" /> */}
              </div>
              <section>
                {item.logs.map((log, logIndex) => (
                  <div key={`journey_${logIndex}`} className="flex relative pb-8 last:pb-0">
                    {logIndex !== item.logs.length - 1 && (
                      <div className="w-10 absolute inset-x-0 inset-y-1 mt-10 flex items-center justify-center">
                        <div className="border-l border-dashed border-gray-400 h-full w-px pointer-events-none"></div>
                      </div>
                    )}
                    <div className="flex items-center justify-center align-middle flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full z-0">
                      <span role="img" aria-label={log.title}>
                        {log.emoji}
                      </span>
                    </div>
                    <div className="flex-grow pl-4">
                      <Card title={log.title} description={log.description} />
                    </div>
                  </div>
                ))}
              </section>
            </div>
          ))}
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allLogbook = (await getAllLogbook(preview)) ?? []

  const mappedLogbook = []
  allLogbook.map((log) => {
    const year = new Date(log.date).getFullYear()
    const existingYear = mappedLogbook.find((item) => item?.year === year)

    if (!existingYear) {
      mappedLogbook.push({
        year,
        logs: [log]
      })
    } else {
      existingYear.logs.push(log)
    }
  })

  return {
    props: { allLogbook: mappedLogbook }
  }
}

export default Journey
