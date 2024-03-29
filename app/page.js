// app/page.js

import Link from "next/link";
import Image from "next/image";

const getAllItems = async() => {
    const response = await fetch("http://localhost:3000/api/item/readall", {cache:"no-cache"});
    const jsonData = await response.json();
    const allItems = jsonData.allItems;
    return allItems;
};

const ReadAllItems = async() => {

    const allItems = await getAllItems();

    return(
        <div>
            <h1>トップページ</h1>
            {allItems.map(item => 
                <Link href={`/item/readsingle/${item._id}`} key={item._id}>
                    <Image src={item.image} height={100} width={100} alt="item-image" priority />
                        <div key={item._id}>
                            <h2>{item.price}</h2>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                </Link>
            )}
        </div>
    );
};

export default ReadAllItems;