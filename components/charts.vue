

<template>
  <div class="chart-container">
    <div class="chart-wrapper">
      <TickerTape
        :options="{
          symbols: [
            {
              proName: 'FOREXCOM:SPXUSD',
              title: 'S&P 500 Index',
            },
            {
              proName: 'FOREXCOM:NSXUSD',
              title: 'US 100 Cash CFD',
            },
            {
              proName: 'FX_IDC:EURUSD',
              title: 'EUR to USD',
            },
            {
              proName: 'BITSTAMP:BTCUSD',
              title: 'Bitcoin',
            },
            {
              proName: 'BITSTAMP:ETHUSD',
              title: 'Ethereum',
            },
          ],
          showSymbolLogo: true,
          isTransparent: false,
          displayMode: 'adaptive',
          colorTheme: 'light',
          locale: 'en',
        }"
      />
      <h1 class="text-center textxl font-bold capitalize text-gray-700">
        Learn the art of forex trading
      </h1>
      <p class="w-4/4 text-center">
        Join my mentorship and let me walk you through the concept of
        <span>technical analysis</span> from basics to becoming a profitable
        forex trader in real time.
      </p>
      <div class="chart">
        <Chart
          :options="{
            autosize: true,
            symbol: 'OANDA:EURUSD',
            interval: 'D',
            timezone: 'Etc/UTC',
            theme: 'dark',
            style: '1',
            locale: 'en',
            withdateranges: true,
            hide_side_toolbar: false,
            allow_symbol_change: true,
            details: true,
            hotlist: true,
            calendar: true,
            support_host: 'https://www.tradingview.com',
          }"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chart-container {
  width: 100%;
  height: fit-content;

  .chart-wrapper {
    width: 100%;
    height: fit-content;
    margin: auto;

    h1 {
      font-size: 40px;
      font-family: "JetBrains Mono", monospace;
      padding: 20px;
      padding-top: 50px;
    }

    p {
      width: 80%;
      margin: auto;
      font-family: "JetBrains Mono", monospace;
    }

    .chart {
      height: 70vh;
      width: 70vw;
      margin: 20px auto;
      border-radius: 15px;
      border: 15px groove teal;
    }
  }
}
</style>
