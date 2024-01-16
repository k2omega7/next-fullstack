// app/item/readsingle/[id]/page.js

import Link from "next/link";
import Image from "next/image";

const getSingleItem = async(id) => {
    const response = await fetch(`http://localhost:3000/api/item/readsingle/${id}`, {cache:"no-cache"});
    const jsonData = await response.json();
    const singleItem = jsonData.singleItem;
    return singleItem;
};

const ReadSingleItem = async(context) => {
    const singleItem = await getSingleItem(context.params.id);
    console.log(singleItem);
    return(
        <div>
            <div>
                <Image src={singleItem.image} height={200} width={200} priority/>
            </div>
            <div>
                <h1>{singleItem.title}</h1>
                <h2>{singleItem.price}</h2>
                <hr/>
                <p>{singleItem.description}</p>
                <div>
                    <Link href={`/item/update/${singleItem._id}`}>アイテム編集</Link>
                    <br/>
                    <Link href={`/item/delete/${singleItem._id}`}>アイテム削除</Link>
                </div>
            </div>
        </div>
    );
};

export default ReadSingleItem;