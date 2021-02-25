import Layout from '../../components/layout'
import Link from 'next/link'

export default function FirstPost(){
    return <Layout>
    <h1>こんにちは</h1>
    <div>今日は、楽しい虚無を紹介します</div>
    <Link href="../">
        <a>
        もどる
        </a>
        </Link>
    </Layout>
}