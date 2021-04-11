import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './FriendDetail.css';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    const {name, email, phone, website, address} = friend;

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setFriend(data))
    }, [])

    return (
        <div className="detail-area">
            
            <p>this component for friend details: {friendId}</p>
            <br/>
            <h1>Name: {name}</h1>
            <br/>
            <h3>Email: {email}</h3>
            <h3>Phone: {phone}</h3>
            {/* <h3>City:{address.street}, {address.city}</h3> */}
            <h3>Website: {website}</h3>
            <p className="friend-about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, a tenetur eveniet expedita neque totam ipsa, ex ipsam facilis temporibus, illo magnam inventore nisi modi quaerat facere corporis quo fuga? Eaque facere quaerat, quis in voluptatem commodi quod veniam sapiente doloremque voluptate dolorem suscipit quibusdam consequatur dolores explicabo tempore possimus. Animi quas deleniti nostrum doloremque tenetur unde delectus fugiat ad voluptas iure ab optio, et suscipit fuga in porro repellendus. Beatae suscipit consectetur, eius incidunt quae ipsum dolore quo quisquam doloremque labore quaerat magnam corrupti quasi pariatur, esse atque dicta enim neque. Amet quibusdam ut molestias laborum labore, sequi eius iste provident ipsum quasi assumenda vero ab quod dolorem itaque exercitationem explicabo quisquam culpa tempora facilis necessitatibus est, nesciunt repudiandae temporibus! Sunt autem, nulla dignissimos possimus consequatur dolorum aliquam incidunt nam quae atque minus minima porro fugiat cumque veniam architecto ab nostrum tempora animi cum. Officiis quod libero expedita est cupiditate consectetur, error numquam impedit rem. Excepturi quaerat nostrum distinctio. Illum voluptatem modi nostrum architecto tenetur repellat, laborum ea nihil voluptates earum cum consectetur magnam sunt debitis natus sed quo aliquid repellendus facilis doloremque. Quasi recusandae minima tempore aut nostrum nisi voluptatibus deleniti provident veritatis in totam expedita eaque praesentium architecto optio eveniet ex est, vero aliquam obcaecati? Molestiae a nostrum eaque laboriosam quidem ut porro voluptates natus, delectus eos explicabo ullam vitae cupiditate possimus? Earum minus accusamus autem voluptate deleniti, beatae eveniet placeat, dicta labore esse harum aut aliquid nam adipisci id cumque in illo hic non, repudiandae dolorem. Incidunt quibusdam iste temporibus adipisci excepturi tenetur dignissimos. Dignissimos impedit cum labore, saepe praesentium numquam soluta vitae officia reprehenderit nisi, delectus aliquam, ipsum natus. Beatae dolore error labore repudiandae sit quisquam fugiat iste nihil deleniti consequuntur vitae aperiam, asperiores officiis? Aliquid vitae fuga sunt molestias cupiditate ad, laborum fugit deleniti quis, temporibus doloribus, asperiores soluta ipsum in est unde repellat fugiat sapiente. Placeat consequatur accusantium, nobis iste dolore ullam maiores officiis odio minus magni alias ad repellat doloremque fugiat magnam blanditiis quo asperiores impedit soluta! Hic illum velit reiciendis nobis! Nostrum quibusdam quis soluta a doloremque ratione facere repellendus animi sed eveniet vitae praesentium consectetur culpa, provident voluptatum, aperiam ea, dicta illum quae! Repellat sit soluta expedita, dolore laudantium eveniet labore fuga mollitia modi accusamus esse magni dolores explicabo officia odio nulla molestiae sint totam quasi ducimus earum officiis vitae debitis corporis! Consectetur dicta optio libero voluptatibus rem odit illum illo, ducimus voluptate inventore odio non labore consequatur, quia id eos. Soluta aspernatur nesciunt reprehenderit vero quam laborum officiis illum et error, excepturi, accusantium saepe inventore natus adipisci quaerat est eos tenetur eligendi sed! Ullam nulla commodi nesciunt perferendis perspiciatis placeat nihil doloribus error ad dolor corporis accusamus, vero optio incidunt provident libero labore praesentium? Possimus at reprehenderit tenetur commodi quasi veniam quibusdam labore recusandae quaerat sint laborum dolor, officia, sit, porro architecto. Pariatur vel quasi esse facere necessitatibus, repudiandae, est quas commodi obcaecati a quibusdam animi ratione ipsum ut. Quia, eaque! Consequatur nam voluptates, laborum et distinctio nulla dolore?</p>
        </div>
    );
};

export default FriendDetail;