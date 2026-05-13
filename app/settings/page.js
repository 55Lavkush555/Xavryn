"use client"
import React from 'react'
import styles from "./page.module.css"
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();

    return (
        <div className={styles.settings}>
            <nav>
                <button onClick={() => router.back()}>く</button>
                <img src="./images/logo.png" alt="" />
                Settings
            </nav>
            <div className={styles.divider} />

            <main>
                <h2>Profile</h2>
                <p>Manage your public profile and personal information.</p>

                <div className={styles.profileSetting}>
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
                        <input type="text" placeholder='e.g. Jhon.dev'/>
                    </div>
                    <div className={styles.save}>
                        <button className={styles.hover}>Save Changes</button>
                    </div>
                </div>

                <div className={styles.Appearance} >
                    <div>
                        <h3>Theme</h3>
                        <p>Select the theme for your device.</p>
                    </div>
                    <div>
                        <ThemeToggle />
                    </div>
                </div>

                <div className={styles.logout}>
                    <button>Sign out</button>
                </div>
            </main>
        </div>
    )
}

export default page