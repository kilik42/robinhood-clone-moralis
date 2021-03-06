import { styled} from "@material-ui/styles"
import { makeStyles } from '@material-ui/styles';
import {BiDotsHorizonalRounded} from 'react-icons/bi'
import {AiOutlinePlus} from 'react-icons/ai'


const styles = {
  wrapper: 'w-screen h-screen flex flex-col',
  maincontainer: 'w-2/3 h-full m-auto flex mt-16',
  leftMain: 'flex flex-col w-3/4 h-full p-6 overflow-y-scroll',
  portfolioAmountContainer: 'flex flex-col',
  portfolioAmount: 'text-white font-bold text-sm',
  pastHour: 'text-gray-400',
  chartContainer: 'text-5xl flex justify-center -full h-1/3 text-white mt-11 mb-11 mb-11',
  buyingPowerContainer: 'w-full border-t mb-24 border-b h-16 border-[#30363b]flex justify-between item',
  buyingPowerTitle:'text-white font-bolder text-lg',
  buyingPowerAmount: 'text-white font-bolder text-xl',
  notice: 'flex boreder border-[#30363b] mx-11 my-4 p-5 flex-col flex-1',
  noticeContainer: 'flex-1',
  noticeTitle: 'text-gray-500',
  noticeMessage: 'text-white font-bold',
  noticeCTA: 'font-bold text-green-500 cursor-pointer mt-5',
  rightMain: 'flex flex-col flex-1 h-4/5 bg-[#1E2123] mt-6 rounded-lg overflow-y-scroll noScroll',
  rightMainItem: 'flex items-center text-white p-5 border-b border-[#30363b]',
  ItemTitle: 'flex-1 font-bold',
  moreOptions: 'cursor-pomter text-xl',

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
