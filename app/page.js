"use client"
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const iconStyle = {
    width: "3rem",
    height: "3rem",
    borderRadius: "0.75rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1.25rem", background: `
      linear-gradient(
        to bottom right,
        rgba(16, 185, 129, 0.2),
        rgba(5, 150, 105, 0.05)
      )
    `,
    transition: "transform 0.3s",

  }

  return (
    <div className={styles.home}>
      <nav>
        <div className={styles.logo}><img src="./images/logo.png" alt="" /> Xavryn</div>

        <div className={styles.buttonsContainer}>
          <button className={styles.login}><Link href={"/"}>Sign in</Link></button>
          <button className={styles.signup}><Link href={"/"}>Get started</Link></button>
        </div>
      </nav>

      <motion.div className={styles.content}
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <h1>Connect Beyond</h1>
        <h1 className={styles.blue}>Boundries</h1>
        <p>Experience seamless communication with security, AI-powered features, and a beautiful interface designed for the way you connect.</p>
        <div className={styles.btn}>
          <button className={styles.login}><Link href={"/"}>Sign in</Link></button>
          <button className={styles.signup}><Link href={"/"}>Get started</Link></button>
        </div>

        <div className={styles.featureList}>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-5 h-5 text-primary" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
            Secure Auhentication</div>

          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-5 h-5 text-primary" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
            Instant delivery</div>

          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-5 h-5 text-primary" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
            Group convercations</div>

        </div>

        <div className={styles.image}>
          <Image src="/images/demo.png" alt="" width={600} height={500} />
        </div>
      </motion.div>

      <div className={styles.features}>
        <div className={styles.content}>
          <h1>Everything you need to</h1>
          <h1 className={styles.blue}>communicate better</h1>
          <p>Powerful features designed to enhance your messaging experience and keep you connected with the people who matter most.</p>
        </div>

        <motion.div className={styles.featureCards}
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <div className={styles.card}>
            <div style={iconStyle} ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-6 h-6 text-foreground" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg></div>
            <h3>Secure Authentication</h3>
            <p>Built with modern security practices to keep your conversations protected</p>
          </div>

          <div className={styles.card}>
            <div style={iconStyle}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-6 h-6 text-foreground" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></div>
            <h3>Real-Time Messaging</h3>
            <p>Experience instant message delivery with zero latency. Stay connected with lightning-fast communication.</p>
          </div>

          <div className={styles.card}>
            <div style={iconStyle}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot w-6 h-6 text-foreground" aria-hidden="true"><path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg></div>
            <h3>AI Assistant</h3>
            <p>Built-in AI helps you compose messages, translate languages, and enhance your conversations.</p>
          </div>

          <div className={styles.card}>
            <div style={iconStyle}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock w-6 h-6 text-foreground" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div>
            <h3>Privacy First</h3>
            <p>We never sell your data. Your privacy is our priority with full GDPR compliance.</p>
          </div>

          <div className={styles.card}>
            <div style={iconStyle}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-6 h-6 text-foreground" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg></div>
            <h3>Cross-Platform</h3>
            <p>Seamlessly sync across all your devices. Access your chats from anywhere, anytime.</p>
          </div>

          <div className={styles.card}>
            <div style={iconStyle}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette w-6 h-6 text-foreground" aria-hidden="true"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle></svg></div>
            <h3>Customizable Themes</h3>
            <p>Personalize your experience with beautiful themes and customization options.</p>
          </div>

        </motion.div>
      </div>

      <motion.div className={styles.cta}
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
      >
        <div className={styles.content}>
          <h1>Ready to transform your</h1>
          <h1 className={styles.blue}>communication?</h1>
          <p>Join thousands of users who have already discovered a better way to connect. Experience seamless messaging designed for the modern world.</p>
          <button className={styles.signup}><Link href={"/"}>Get started</Link></button>
        </div>
      </motion.div>
    </div>
  );
}
