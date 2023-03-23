import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Button, Col, Row } from 'antd'
import { useState, useEffect } from 'react'
import { format } from 'date-fns'

export default function Home() {
  const gitHubRepoUrl = process.env.NEXT_PUBLIC_GITHUB_URL_REPO
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/github')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch(() => {
        alert("An error ocurred while fetching data, please refresh page and try again")
        setLoading(false)
      })
  }, [])

  if (isLoading) return (
    <div className={styles.blacky}>
      <center><p>Loading...</p></center>
    </div>
  )
  else if (!data)
    return (
      <div className={styles.blacky}>
        <center><p>No data fetched, please refresh page and try again later.</p></center>
      </div>
    )
  else {
    const stringData = JSON.stringify(data.jsonResponse)
    const parsedData = JSON.parse(stringData)
  if (parsedData.message?.includes("rate limit exceeded")) 
      return (
        <div className={styles.blacky}>
          <center><p>GitHub API rate limit exceeded.</p></center>
        </div>)
    return (
      <div className='container'>
        <Head>
          <title>Test by José Nieto</title>
          <meta name="description" content="fulltimeforce" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={[styles.header]}>
          <Image
            className={styles.logo}
            src="/fulltimeforce.svg"
            alt="FULLTIMEFORCE Logo"
            width={128}
            height={64}
            priority
          />
          <Col span={24}>URL of the queried repository {gitHubRepoUrl}</Col>
        </div>
        <main className={styles.main}>
          <Row className={[styles.center, styles.description]}>
            <p>
              Click in this button to update data&nbsp;
              <Button type='primary'>UPDATE COMMIT HISTORY</Button>
            </p>
          </Row>
          <Col className={styles.center}>
            <table className={styles.table}>
              <tr>
                <th>Hash</th>
                <th>Author</th>
                <th>Date</th>
                <th>Message</th>
              </tr>
              {
                parsedData.map(((item, id) => (
                  <tr key={id}>
                    <td>{item.sha}</td>
                    <td>{item.commit.author.name}</td>
                    <td>{format(new Date(item.commit.committer.date), "dd/MM/yyyy HH:mm:ss")}</td>
                    <td>{item.commit.message}</td>
                  </tr>
                )
                ))
              }
            </table>
          </Col>
        </main>
      </div>
    )
  }
}