import React from 'react'
import './Activity.scss'
import ICON_ELLIPSIS from "../../assets/activity_icons/icon-ellipsis.svg";
import ICON_EXERCISE from "../../assets/activity_icons/icon-exercise.svg";
import ICON_PLAY from "../../assets/activity_icons/icon-play.svg";
import ICON_SELF_CARE from "../../assets/activity_icons/icon-self-care.svg";
import ICON_SOCIAL from "../../assets/activity_icons/icon-social.svg";
import ICON_STUDY from "../../assets/activity_icons/icon-study.svg";
import ICON_WORK from "../../assets/activity_icons/icon-work.svg";

const activity = {
    'Work': {
        'color': 'hsl(15, 100%, 70%)',
        'icon': ICON_WORK
    },
    'Play': {
        'color': 'hsl(195, 74%, 62%)',
        'icon': ICON_PLAY
    },
    'Study': {
        'color': 'hsl(348, 100%, 68%)',
        'icon': ICON_STUDY
    },
    'Exercise': {
        'color': 'hsl(145, 58%, 55%)',
        'icon': ICON_EXERCISE
    },
    'Social': {
        'color': 'hsl(264, 64%, 52%)',
        'icon': ICON_SOCIAL
    },
    'Self Care': {
        'color': 'hsl(43, 84%, 65%)',
        'icon': ICON_SELF_CARE
    },
}

function Activity({ title, timeset, timeframes }) {
    const id = title.toLowerCase()

    return (
        <section className='activity' id={id}>
            <div className='activity-background'
            style={{ backgroundColor: activity[title].color }}
            >
                <img src={activity[title].icon} alt="" />
            </div>

            <div className='activity-data'>
                <div className='activity-top'>
                    <h1>{title}</h1>
                    <img src={ICON_ELLIPSIS} alt="" className='activity-options' /*onClick={}*/ />
                </div>

                <div className='activity-time'>
                    <h2>{timeframes[timeset].current}hrs</h2>
                    <p>Last Week - {timeframes[timeset].previous}hrs</p>
                </div>
            </div>
        </section>
    )
}

export default Activity