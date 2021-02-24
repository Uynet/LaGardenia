import Link from "next/link"

export default function Me(){
    return <>
    <h1>こんにちは</h1>
    <div>こんにちはタウン</div>
    <Link href="/posts/first-post">
        こんにちわ
    </Link>
    <Link href="/">
        もどる
    </Link>
    </>
}