"use client";
import { ChangeEvent, useState } from "react";
import moment from "moment";

export default function LADCalculator() {
  const YYYY_MM_DD = "YYYY-MM-DD";

  const mcoPeriod = 167;
  const ladPercentage = 0.1;


  const [spaDate, setSpaDate] = useState<Date>(new Date("2018-06-03"));
  const [estimatedVP, setEstimatedVP] = useState<Date>(new Date("2024-03-31"));
  const [purchaseAmount, setPurchaseAmount] = useState<number>(0);
  const [showMCOOffset, setShowMCOOffset] = useState<boolean>(true);

  const getDelayInDays = (withMCO: boolean): number => {
    const spaDeliveryDate = moment(spaDate).add(36, "month");
    const diffDays = moment(estimatedVP).diff(spaDeliveryDate, "days");
    return withMCO ? diffDays - mcoPeriod : diffDays;
  }

  const getLADAmount = (): number => {
    return (ladPercentage * purchaseAmount * getDelayInDays(true)) / 365;
  }

  return (
    <main className="flex flex-col container mx-auto p-8 md:p-24">
      <p>According to Homebuyer Review Committee meeting held on 31 March 2023, the calculation of LAD is stated as below</p>
      <br />
      <p>Cara pengiraan pembayaran LAD mengikut pengiraan yang telah ditetapkan didalam <b>Klausa 26 (2) Perjanjian Jual Beli (SPA) dan Seksyen 35 Akta COVID-19</b> adalah seperti berikut:</p>
      <br />
      <div className="inline-block text-center self-center">
        <div>10% x harga rumah x [jumlah hari tertunggak - tempoh pengecualian]</div>
        <div className="border border-brickfields dark:border-white" />
        <div>365</div>
      </div>
      <div className="calculator mt-8">
        <p className="mb-4">You can utilize the calculator below to calculate the estimated LAD amount.</p>
        <div className="grid grid-cols-4 gap-3 items-center md:w-3/4">
          <label htmlFor="spa-date">SPA Signed Date</label>
          <input
            className="border col-span-3 dark:text-black p-1"
            id="spa-date"
            type="date"
            value={moment(spaDate).format(YYYY_MM_DD)}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setSpaDate(new Date(event.target.value))}
          />
          <label htmlFor="purchase-amount">Purchase Price</label>
          <input
            className="border col-span-3 dark:text-black p-1"
            id="purchase-amount"
            type="text"
            pattern="\d*"
            inputMode="numeric"
            value={purchaseAmount}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setPurchaseAmount(Number(event.target.value))}
          />
          <label htmlFor="vp-date">Estimated VP Date</label>
          <input
            className="border col-span-3 dark:text-black p-1"
            id="vp-date"
            type="date"
            value={moment(estimatedVP).format(YYYY_MM_DD)}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setEstimatedVP(new Date(event.target.value))}
          />
          <label>Days of Delay</label>
          <div className="grid grid-cols-2 col-span-3">
            <span className="text-red-500">{getDelayInDays(showMCOOffset)} Days</span>
            <label htmlFor="mco-offset">
              <input
                id="mco-offset"
                className="mr-2"
                type="checkbox"
                defaultChecked={showMCOOffset}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setShowMCOOffset(event.target.checked)}
              />
              Offset MCO Period
            </label>
          </div>
          <div>Estimated LAD Amount</div>
          <div className="col-span-3 text-green-600">RM {getLADAmount().toFixed(2)}</div>
        </div>
      </div>
    </main>
  )
}