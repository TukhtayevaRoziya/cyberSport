import React, { memo } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import CountUp from 'react-countup'

import styles from './Count.module.css'

export const Count = memo(() => {
  return (
    <div className={styles.wrap} id='abacus'>
        <div className={styles.counter_body}>
          <div className={styles.counter_block}>
            <CountUp start={1} end={1300} duration={0.7}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <h1>Twitch потоки</h1>
          </div>
          <div className={styles.counter_block}>
            <CountUp start={0} end={108} duration={0.7}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <h1>Стримеры</h1>
          </div>
          <div className={styles.counter_block}>
            <CountUp start={1} end={1000} duration={0.7}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <h1>CS:GO</h1>
          </div>
          <div className={styles.counter_block}>
            <CountUp start={1} end={202} duration={0.7}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <h1>Twitch потоки</h1>
          </div>
        </div>
    </div>
  )
})
