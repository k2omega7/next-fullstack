import Link from "next/link";

const Header = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li><Link href="user/register">ユーザ登録</Link></li>
                    <li><Link href="user/login">ログイン</Link></li>
                    <li><Link href="user/create">アイテム作成</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;