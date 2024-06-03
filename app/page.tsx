import Image from "next/image";
import styles from "@/styles/HomePage.module.scss";

export default function Home() {
  return (
    <main className={`${styles.main} container`}>
        <section className="bg-secundary">
          <div className="row padding-l-4 padding-r-4 padding-t-5">
            <div className="column-10">
              <button role="button" className="button button-gray">
                Search for places
              </button>
            </div>
            <div className="column-2">
              <button role="button" className={`${styles.buttonCircle} button button-gray rounded-full padding-0 margin-l-auto d-flex items-c justify-c`}>
                <span className="material-symbols-outlined md-2">
                  my_location
                </span>
              </button>
            </div>
          </div>
          <div className="d-flex justify-c items-c p-relative overflow-h padding-t-10 padding-b-10
          ">
            <Image
              className="z-10"
              alt="Shower"
              src="/Shower.png"
              width={150}
              height={174}

            />
            <Image
              className="p-absolute center object-cover padding-3 z-1 o-5"
              alt="background cloud"
              src="/Cloud-background.png"
              priority
              width={563}
              height={326}
            />
          </div>
          <div className="text-center">
            <div className="color-lila">
              <span className="heading-8 ">15</span>
              <span className="heading-6">&#xb0;c</span>
            </div>
            <span className="heading-5 color-gray-light fw-semimed">Shower</span>
            <div className="color-gray heading-4">
              Today 
              <span className="padding-l-5 padding-r-5">•</span> 
              Fri,5 Jun
            </div>
          </div>
        </section>
    </main>
  );
}
