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
            title="T8 Pro Max Golf Speaker 45W"
            price={129.98}
        >
            <ProductSwiper
                images={[
                    '/images/T8ProMax-40W/81k0hja96RS._AC_SL150027bb.jpg',
                    '/images/T8ProMax-40W/81TyNet0GWL._AC_SL1500e4db.jpg',
                    '/images/T8ProMax-40W/91cgIsD55RL._AC_SL150047fa.jpg',
                    '/images/T8ProMax-40W/198389893_283456556795450_5236851869529339816_n_2827f.jpg',
                    '/images/T8ProMax-40W/81k0hja96RS._AC_SL150027bb.jpg',
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
                image="/images/T8ProMax-40W/poza_14.jpg"
                description={
                    <span>
                        Dont get fooled by its small size, this 40W speaker will bring a bang for
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
                    ✅ Clear Sound and Extra Bass at its Finest–Forget about poor sound and weak
                    bass, this portable golf cart speaker will put a smile on your face with it’s
                    360° multi-directional audio swivel and SUPER BASS. <br /> <br /> ✅ Play more
                    rounds with extended battery life-Thanks to its large battery capacity, this
                    golf cart accessories
                </p>
            </div>
        </div>
        <ProductYTVideo url="https://www.youtube.com/embed/05EXpfiUk5Y" />
    </section>
);

export default Product;
