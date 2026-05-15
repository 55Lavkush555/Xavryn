"use client"
import React from 'react'
import styles from "./page.module.css"
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from 'next/link';

const page = () => {
    const router = useRouter();

    return (
        <div className={styles.settings}>
            <nav>
                <button><Link href="/">く</Link></button>
                <img src="./images/logo.png" alt="" />
                Settings
            </nav>
            <div className={styles.divider} />

            <main>
                <h2>Profile</h2>
                <p>Manage your public profile and personal information.</p>

                <motion.div className={styles.profileSetting}
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
                    <div className={styles.avatarContainer}>
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
                        <div>
                            <h3>Jhon Doe</h3>
                            <button className={styles.hover}>Change Avatar</button>
                        </div>
                    </div>
                    <div>
                        <p>Display name</p>
                        <input type="text" placeholder='e.g. Jhon Doe' />
                    </div>
                    <div>
                        <p>Username</p>
                        <input type="text" placeholder='e.g. Jhon.dev' />
                    </div>
                    <div>
                        <p>Bio</p>
                        <textarea name="Bio" id=""></textarea>
                    </div>
                    <div className={styles.save}>
                        <button className={styles.hover}>Save Changes</button>
                    </div>
                </motion.div>

                <motion.div className={styles.Appearance}
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
                    <div>
                        <h3>Theme</h3>
                        <p>Select the theme for your device.</p>
                    </div>
                    <div>
                        <ThemeToggle />
                    </div>
                </motion.div>

                <motion.div className={styles.logout}
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
                    <button className={styles.hover}>Sign out</button>
                </motion.div>
            </main>
        </div>
    )
}

export default page