import { NextPage } from 'next';
import {
    ProductHeader,
    ProductInfo,
    ProductSwiper,
    ProductYTVideo,
} from 'components/Product/Index';

const Product: NextPage = () => (
    <section className="bg-white">
        <ProductHeader
            amazonLink="https://www.amazon.com/dp/B08KZQZQ3S/ref=cm_sw_em_r_mt_dp_U_1ZQ7FbZJZJZ1S"
            title="T8 Pro Golf Speaker 15W"
            price={75.98}
        >
            <ProductSwiper
                images={[
                    '/images/T8PRO-15W/198324650_2868898236756990_8325215817140438754_n_bb067ba7-0626-485a-8a0d-143d4fc5f3423639.jpg',
                    '/images/T8PRO-15W/818EFfzWVcS._AC_SL150042c0.jpg',
                    '/images/T8PRO-15W/91QLa0t1NNS._AC_SL150047fa.jpg',
                    '/images/T8PRO-15W/81q5rr5PIYS._AC_SL150018b0.jpg',
                ]}
            />
        </ProductHeader>
        <div className="md:w-[70rem] mx-auto md:py-10 p-2 md:p-0 ">
            <h1 className="font-semibold text-center font-serif my-5   text-2xl underline underline-offset-4">
                {' '}
                Description
            </h1>

            <ProductInfo
                title="Small, but powerful."
                image="/images/sm_speaker.jpg"
                description={
                    <span>
                        Dont get fooled by its small size, this 15W speaker will bring a bang for
                        the buck. With only 6 active buttons, you will be listening to your favorite
                        music in no time ! This speaker will bring a smile on your face on the golf
                        course !
                    </span>
                }
            />

            <ProductInfo
                title="Mount it on golf cart or caddy."
                image="/images/small_speaker.jpg"
                description={
                    <span>
                        The UNIQUE Stainless Steel Bar Mount allows the speaker to be mounted on
                        both golf caddies or golf carts. With a battery like of up to 20 hours, this
                        speaker will stay with you all day !
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
