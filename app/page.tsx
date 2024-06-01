import Image from "next/image";
import styles from "@/styles/HomePage.module.scss";

export default function Home() {
  return (
    <main className={`${styles.main} container`}>
        <section className="row">
          <div className="column-10">
            <button role="button" className="button button-gray">
              Search for places
            </button>
          </div>
          <div className="column-2">
            <button role="button">
              locarion
            </button>
          </div>
          <div>
            <span className="heading-4">Today's Hightlights</span>
            <Image
              alt="Shower"
              src="/Shower.png"
              width={150}
              height={174}

            />
          </div>
        </section>
    </main>
  );
}
