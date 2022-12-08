import { NextPage } from 'next';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Select from 'react-select';
import { FaAmazon } from 'react-icons/fa';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import { Pagination, Navigation } from 'swiper';

import Image from 'next/image';

const Product: NextPage = () => {
    const [counter, setCounter] = useState(1);
    return (
        <section className="bg-[#F8F8F8]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-[80rem] mx-auto pt-10 px-5">
                <div className="md:w-[540px] ">
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        loop
                        modules={[Pagination, Navigation]}
                        navigation
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="mb-8">
                                <Image
                                    className="object-cover"
                                    src="/images/T8ProMax-40W/81k0hja96RS._AC_SL150027bb.jpg"
                                    alt="product"
                                    height={540}
                                    width={540}
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="mb-8">
                                <Image
                                    className="object-cover"
                                    src="/images/T8ProMax-40W/81TyNet0GWL._AC_SL1500e4db.jpg"
                                    alt="product"
                                    height={540}
                                    width={540}
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="mb-8">
                                <Image
                                    className="object-cover"
                                    src="/images/T8ProMax-40W/91cgIsD55RL._AC_SL150047fa.jpg"
                                    alt="product"
                                    height={540}
                                    width={540}
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="mb-8">
                                <Image
                                    className="object-cover"
                                    src="/images/T8ProMax-40W/198389893_283456556795450_5236851869529339816_n_2827f.jpg"
                                    alt="product"
                                    height={540}
                                    width={540}
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="mb-8">
                                <Image
                                    className="object-cover"
                                    src="/images/T8ProMax-40W/81k0hja96RS._AC_SL150027bb.jpg"
                                    alt="product"
                                    height={540}
                                    width={540}
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div>
                    <h1 className="text-3xl font-semibold">T8 Pro Max Golf Speaker 45W</h1>
                    <p className=" font-semibold mt-4 ">
                        VAT Included. FREE Shipping for Prime Users.
                    </p>
                    <h2 className="text-3xl font-semibold mt-5">$129.98</h2>
                    <div className="my-5">
                        <Select
                            options={[
                                {
                                    value: 'Blue - $99.98',
                                    label: 'Blue - $99.98',
                                },
                            ]}
                            placeholder="Blue - $99.98"
                            className="w-96"
                        />
                    </div>
                    <div className="flex">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.amazon.com/dp/B08KZQZQ3S/ref=cm_sw_em_r_mt_dp_U_1ZQ7FbZJZJZ1S"
                            className="bg-[#D38106] text-white flex items-center px-10 py-2 text-sm rounded-md mt-4"
                        >
                            <span className="font-semibold">Check price on</span>
                            <FaAmazon className="text-white mt-1 text-lg ml-2" />
                        </a>
                    </div>
                    <div className="mt-8 text-xl space-y-5 ">
                        <p>
                            ✅ Clear Sound and Extra Bass at its Finest–Forget about poor sound and
                            weak bass, this portable golf cart speaker will put a smile on your face
                            with it’s 360° multi-directional audio swivel and SUPER BASS. <br /> ✅
                            Play more rounds with extended battery life-Thanks to its large battery
                            capacity, this golf cart accessories
                        </p>
                    </div>
                </div>
            </div>
            <div className="md:w-[70rem] mx-auto py-10">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <Image
                        src="/images/T8ProMax-40W/poza_14.jpg"
                        alt="product"
                        height={520}
                        width={500}
                        layout="responsive"
                    />
                    <div className="flex flex-col justify-center bg-white pl-8 ">
                        <h1 className="text-3xl font-semibold mb-5">Small, but powerful.</h1>
                        <p className="tracking-wider text-lg">
                            Dont get fooled by its small size, this 40W speaker will bring a bang
                            for the buck. With only 6 active buttons, you will be listening to your
                            favorite music in no time ! This speaker will bring a smile on your face
                            on the golf course !
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex flex-col justify-center bg-white pl-8 ">
                        <h1 className="text-3xl font-semibold mb-5">
                            Mount it on golf cart or caddy.
                        </h1>
                        <p className="tracking-wider text-lg">
                            The UNIQUE Stainless Steel Bar Mount allows the speaker to be mounted on
                            both golf caddies or golf carts. With a battery like of up to 20 hours,
                            this speaker will stay with you all day !
                        </p>
                    </div>
                    <Image
                        src="/images/small_speaker.jpg"
                        alt="product"
                        height={520}
                        width={500}
                        layout="responsive"
                    />
                </div>
            </div>
            <div className="md:w-[80rem] mx-auto pb-10">
                <iframe
                    title="product-video"
                    allowFullScreen
                    src="https://www.youtube.com/embed/05EXpfiUk5Y"
                    className="w-full h-[390px] md:h-[600px] md:px-36 bg-black object-cover shadow-lg "
                />
            </div>
        </section>
    );
};

export default Product;
