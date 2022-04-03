import { StylesContext } from "@material-ui/styles"

const styles = {
  wrapper: 'w-screen h-screen flex flex-col'

}
export default function Home() {
  return (
    <div className={styles.wrapper}>
     {/* <Header /> */}
    
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
            <div className={noticeContainer}>
                <div className={noticeTitle}> send funds </div>
                <div className={noticeMessage}>
                  Transfer your funds here
                </div>
                {/* <BuyTokens/> */}
            </div>
          </div>
      </div>
    // </div>
  )
}
