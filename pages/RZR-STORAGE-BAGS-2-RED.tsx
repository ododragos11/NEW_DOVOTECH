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
            title="RZR Storage Bags SET of 2 RED"
            price={68.98}
        >
            <ProductSwiper
                images={[
                    '/red.jpg',
                    '/images/StorageBags-Set2-RED/81nrVxAJ3KS._AC_SL1500e55c.jpg',
                    '/images/StorageBags-Set2-RED/81Xq8CctWiS._AC_SL150047fa.jpg',
                    '/images/StorageBags-Set2-RED/815N5wPfD8S._AC_SL1500e4db.jpg',
                ]}
            />
        </ProductHeader>
        <div className="md:w-[70rem] mx-auto md:py-10 p-2 md:p-0 ">
            <h1 className="font-semibold text-center font-serif my-5  text-2xl underline underline-offset-4">
                {' '}
                Description
            </h1>

            <ProductInfo
                title="Great Utility."
                image="/images/StorageBags-Set3-RED/81251iq5hVL._AC_SL150057b0.jpg"
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
                image="/images/StorageBags-Set2-RED/815N5wPfD8S._AC_SL1500e4db.jpg"
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
        {/* <div className="md:w-[68rem] mx-auto py-10 p-5 md:p-0 mb-10 ">
            <h1 className="font-semibold text-center font-serif my-5   text-2xl underline underline-offset-4">
                Customer Reviews
            </h1>
            <ProductReview
                name="Shannon"
                rating={5}
                border
                review={
                    <span>
                        My husband has been dealing with hip pain for about 6 months now. He wore
                        this to work the day after it arrived and came home and told me it was life
                        changing. He works in the construction industry and is constantly walking
                        and going up and down ladders and stairs. <br /> It’s been over a week now
                        and I can definitely see a difference in the way he walks and moves while
                        wearing it. It’s extremely easy to put on and he has no issues wearing it
                        under his clothing.
                    </span>
                }
            />
            <ProductReview
                name="Niv"
                rating={5}
                border
                review="It's very good in holding your muscles and creating the balance needed for you to get back to shape."
            />

            <ProductReview
                name="Abhi"
                rating={5}
                review={
                    <span>
                        Been really struggling with sciatica pain from a herniated disc. I’ve been
                        steadily rehabbing but I find myself unable to do things like hiking,
                        playing basketball, lifting heavy because it really aggravates my foot and
                        the bitch goes numb. <br />
                        With this brace I’m pretty much back to doing things without having negative
                        repercussions of re-injury from pushing too hard.
                    </span>
                }
            />
        </div> */}
    </section>
);

export default Product;
