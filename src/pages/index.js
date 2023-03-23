import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Button, Col, Row, Table } from 'antd'

export default function Home() {

  /*const handleClick = () => {
    const gitHubRepo
  }*/

  const gitHubRepoUrl = "https://github.com/joseenietoo/fulltimeforce-test.git"

  const dataSource = [
    {
      key: '1',
      hash: 'ec2r5446',
      author: "José Nieto",
      date: '10-03-2023 15:45:32',
      message: "FEAT: initial commit"
    },
    {
      key: '2',
      hash: 'ec2r5446',
      author: "José Nieto",
      date: '10-03-2023 15:45:32',
      message: "FEAT: initial commit"
    },
    {
      key: '3',
      hash: 'ec2r5446',
      author: "José Nieto",
      date: '10-03-2023 15:45:32',
      message: "FEAT: initial commit"
    },
  ];
  
  const columns = [
    {
      title: 'Hash',
      dataIndex: 'hash',
      key: 'hash',
    },
    {
      title: 'Autor',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Fecha',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Mensaje',
      dataIndex: 'message',
      key: 'message',
    },
  ];

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
        <Col span={24}>URL repositorio consultado: {gitHubRepoUrl}</Col>
      </div>
      <main className={styles.main}>
        <Row className={[styles.center, styles.description]}>
          <p>
            Haga click en el siguiente botón&nbsp;
            <Button type='primary'>Actualizar Historial</Button>
          </p>
        </Row>
        <Table dataSource={dataSource} columns={columns} />;
      </main>
    </div>
  )
}
