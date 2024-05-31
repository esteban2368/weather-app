import Image from "next/image";
import styles from "@/styles/HomePage.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
        <section>
          <div>
            <button role="button">
              Search for places
            </button>
            <button role="button">
              locarion
            </button>
            <span className="heading-5">Today's Hightlights</span>
          </div>
          <div>
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
