import { styled} from "@material-ui/styles"
import { makeStyles } from '@material-ui/styles';
import {BiDotsHorizonalRounded} from 'react-icons/bi'
import {AiOutlinePlus} from 'react-icons/ai'


const styles = {
  wrapper: 'w-screen h-screen flex flex-col',
  maincontainer: 'w-2/3 h-full m-auto flex mt-16',
  leftMain: 'flex flex-col w-3/4 h-full p-6 overflow-y-scroll',
  

}
export default function Home() {
  return (
  
    <div className={styles.wrapper}>
     {/* <Header /> */}
    <div className={styles.leftMain}>

    
        <div className={styles.maincontainer}>
          <div className={styles.portfolioAmountContainer}>
            <div className={styles.portfolioAmount}>23 eth</div>
            <div className={styles.portfolioPercent}> +0.0008(+0.0)
              <span className={styles.pastHour}>Past Hour</span>
            </div>
          </div>
        </div>
          <div>
            <div className={styles.chartContainer}>

              {/* <PortfolioChart/> */}
            </div>
          </div>

          <div className={styles.buyingPowerContainer}>
              <div className={styles.buyingPowerTitle}> Buying power </div>
              <div className={styles.buyingPowerAmount}> 12 eth</div>
            </div>

            <div className={styles.notice}>
              <div className={styles.noticeContainer}>
                  <div className={styles.noticeTitle}> send funds </div>
                  <div className={styles.noticeMessage}>
                    Transfer your funds here
                  </div>
                  {/* <BuyTokens/> */}
              </div>
            </div>
            {/* <Notice /> */}
      </div>
      <div className={styles.rightMain}>
        <div className={styles.rightMainItem}>
          <div className={styles.ItemTitle}>Crypto Currencies</div>

          <BiDotsHorizonalRounded className={styles.moreOptions}/>
        </div>

        {/* <Map/> through coins and for every coin make an asset component */}

        {/* Asset */}

        <div className={styles.rightMainItem}>
          <div className={ItemTitle}>Lists</div>
          <AiOutlinePlus className={styles.moreOptions}/>

        </div>
      </div>
   </div> 
    
  )
}
