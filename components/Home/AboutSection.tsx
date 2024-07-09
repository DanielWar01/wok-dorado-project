import CustomImages from "./CustomImages";

export default function AboutSection() {
    const images = [
        "/img/image_1.png",
        "/img/image_2.png",
        "/img/image_3.png",
        "/img/image_4.png",
        "/img/image_5.png",
        "/img/image_6.png",
        "/img/image_7.png",
        "/img/image_8.png",
        "/img/image_9.png",
    ]
    return (
    <>
        <div className=" mx-5 lg:mx-0 md:flex items-center gap-6">
            <div className="flex-1 flex flex-col gap-4">
                <h1 className="text-4xl font-bold">Sobre nosotros</h1>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet rem nobis expedita. Delectus dolore nihil necessitatibus dolores, consectetur ipsam neque quibusdam pariatur quos dolorum magni rerum dolor nulla, ratione ex voluptatem libero similique explicabo soluta beatae quas sed cumque veritatis doloremque. Soluta voluptatem non vel. Error soluta, alias necessitatibus voluptatem consequuntur reiciendis maiores mollitia nemo suscipit quisquam. Eum, fugiat dolorum.</p>
                <button className=" w-40 btn-about text-white p-3 bg-orange-400 font-bold rounded-sm shadow-lg hover:bg-orange-500">Más info</button>
            </div>
            <div className="flex-1 gallery grid grid-cols-3 gap-5 mt-5">
                {images.map((srcImage, index) => (
                    <CustomImages key={index} pt={"85%"} imgSrc={srcImage} />
                ))}
            </div>
        </div>
    </>
    )
}
