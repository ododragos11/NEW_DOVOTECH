import { NextPage } from 'next';
import {
    ProductHeader,
    ProductInfo,
    ProductSwiper,
    ProductYTVideo,
} from 'components/Product/Index';
// import ProductReview from 'components/Product/ProductReview';

const Product: NextPage = () => (
    <section className="bg-white">
        <ProductHeader
            amazonLink="https://www.amazon.com/dp/B08KZQZQ3S/ref=cm_sw_em_r_mt_dp_U_1ZQ7FbZJZJZ1S"
            title="RZR Storage Bags SET of 3 GREY"
            price={99.98}
        >
            <ProductSwiper
                images={[
                    '/grey.jpg',
                    '/images/StorageBags-Set3-GREY/61-nJHgmBtL._AC_SX615_SY4626de6.jpg',
                    '/images/StorageBags-Set3-GREY/81cvdbTSgyL._AC_SL1500__1_b8cea4c8-0cb1-4273-85e4-2d4ec1a3ae3c961b.jpg',
                    '/images/StorageBags-Set3-GREY/81h_Yomb8cL._AC_SX615_SY4626de6.jpg',
                ]}
            />
        </ProductHeader>
        <div className="md:w-[70rem] mx-auto md:py-10 p-2 md:p-0 ">
            <h1 className="font-semibold text-center font-serif my-5   text-2xl underline underline-offset-4">
                {' '}
                Description
            </h1>

            <ProductInfo
                title="Great Utility."
                image="/images/StorageBags-Set3-GREY/81h_Yomb8cL._AC_SX615_SY4626de6.jpg"
                description={
                    <span>
                        These bags provide great utility due to the fact that they have one large
                        pocket, an exterior mesh pocket and water bottle holder. Besides their great
                        storage capacity, these bags are also comfortable due to their knee padding!
                    </span>
                }
            />

            <ProductInfo
                title="Scratch Resistant Carbon Fiber."
                image="/images/StorageBags-Set2-Grey/81P-vWUCmRL._AC_SL150047fa.jpg"
                description={
                    <span>
                        The DOVOTECH Storage Bags are made out of an UNIQUE on the market carbon
                        fiber material. Besides its appealing design, it offers great protection
                        against water, dust and scratches.
                    </span>
                }
                reverse
            />
        </div>
        <div className="md:w-[70rem] mx-auto md:py-10 p-5 md:p-0 ">
            <h1 className="font-semibold text-center font-serif my-5   text-2xl underline underline-offset-4">
                Features
            </h1>

            <div className="flex flex-col md:flex-row justify-center items-center text-gray-600 bg-white p-10">
                <p>
                    ✔️ Package contains 2 x DOVOTECH RZR Storage Door Bags BLUE, 1 x Instruction
                    Manual. <br />
                    <br />
                    ✔️ Mudproof and waterproof.
                    <br />
                    <br />
                    ✔️ Fresh CARBON FIBER look.
                    <br />
                    <br /> ✔️ US Customer Support
                </p>
            </div>
        </div>
        <ProductYTVideo url="https://www.youtube.com/embed/05EXpfiUk5Y" />
    </section>
);

export default Product;
