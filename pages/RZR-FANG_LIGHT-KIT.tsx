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
            amazonLink="https://www.amazon.com/stores/page/5B603D9A-4158-46BD-8D85-90CE90F7347D?ingress=2&visitId=f1253a18-b6be-4f81-913d-c3e313775f63&store_ref=bl_ast_dp_nofrnas_sto&ref_=ast_dp_bln_nofrnas_sto"
            title="RZR Fang Light Kit"
            price={79.98}
        >
            <ProductSwiper
                images={[
                    '/light2.jpg',
                    '/images/RZR-FANG-LIGHT-KIT/71hxLLyOPhS._AC_SL15004c82.jpg',
                    '/images/RZR-FANG-LIGHT-KIT/711yAiv4--S._AC_SL150071bb.jpg',
                    '/images/RZR-FANG-LIGHT-KIT/716Ragrb3rL._AC_SL150071bb.jpg',
                ]}
            />
        </ProductHeader>
        <div className="md:w-[70rem] mx-auto md:py-10 p-2 md:p-0 ">
            <h1 className="font-semibold text-center font-serif my-5   text-2xl underline underline-offset-4">
                {' '}
                Description
            </h1>

            <ProductInfo
                title="Spot potential danger faster."
                image="/images/white-light.png"
                description={
                    <span>
                        These EASY to install, HIGH brightness fang lights will provide a complete
                        makeover to your car. Spot obstacles faster which putting more light on the
                        road !
                    </span>
                }
            />

            <ProductInfo
                title="Tune your machine."
                image="/images/RZR-FANG-LIGHT-KIT/710YC-rThlL._AC_SL150071bb.jpg"
                description={
                    <>
                        <span>
                            The DOVOTECH Fang Light Kit come with a turn light signal on both sides
                            for your convenience. The fang light will kit fit.
                        </span>
                        <strong>
                            2019,2020,2021 RZR XP Turbo, RZR XP 4 Turbo, RZR XP4 1000, RZR XP 1000
                        </strong>
                    </>
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
                    ✔️ WHILE OTHER 2020 RZR XP 1000 lights, RZR accessories and RZR fang lights have
                    weak front lights assembly,
                    <br />
                    <br /> These RZR lights can be installed on the fang kit easily and replace your
                    dull RZR 1000 lights. <br /> <br />
                    The DOVOTECH accent light kit have high quality material: <br />
                    <br /> ABS back shell and a polycarbonate RZR headlights which which makes these
                    accessories beautiful and reliable.
                </p>
            </div>
        </div>
        <ProductYTVideo url="https://www.youtube.com/embed/BlhOFOeB1ig" />
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
