"use client";
import { ChangeEvent, useEffect, useState } from "react";
import moment from "moment";

export default function LADCalculator() {
  const YYYY_MM_DD = "YYYY-MM-DD";

  const mcoPeriod = 167;
  const unitLADPercentage = 0.1;
  const cfLADPercentage = 0.2;


  const [spaDate, setSpaDate] = useState<Date>(new Date("2018-06-03"));
  const [estimatedVP, setEstimatedVP] = useState<Date>(new Date("2024-03-31"));
  const [purchaseAmount, setPurchaseAmount] = useState<number>(0);
  const [showMCOOffset, setShowMCOOffset] = useState<boolean>(true);
  const [ladUnitAmount, setLADUnitAmount] = useState<number>(0);
  const [ladCFAmount, setLADCFAmount] = useState<number>(0);
  const [mcoOffsetLAD, setMCOOffsetLAD] = useState<boolean>(false);

  const getDelayInDays = (withMCO: boolean): number => {
    const spaDeliveryDate = moment(spaDate).add(36, "month");
    const diffDays = moment(estimatedVP).diff(spaDeliveryDate, "days");
    return withMCO ? diffDays - mcoPeriod : diffDays;
  }


  useEffect(() => {
    const getUnitLADAmount = (): number => {
      return (unitLADPercentage * purchaseAmount * getDelayInDays(true)) / 365;
    }

    const getCFLADAmount = (): number => {
      return (cfLADPercentage * purchaseAmount * unitLADPercentage * getDelayInDays(mcoOffsetLAD)) / 365;
    }

    setLADUnitAmount(getUnitLADAmount());
    setLADCFAmount(getCFLADAmount());
  }, [spaDate, estimatedVP, purchaseAmount, mcoOffsetLAD, getDelayInDays, setLADUnitAmount, setLADCFAmount]);

  return (
    <main className="flex flex-col grow container mx-auto px-8 pb-16 md:px-24 md:pb-36">
      <p>According to Homebuyer Review Committee meeting held on 31 March 2023, the calculation of LAD is stated as below:</p>
      <br />
      <p>Cara pengiraan pembayaran LAD mengikut pengiraan yang telah ditetapkan didalam <b>Klausa 26 (2) Perjanjian Jual Beli (SPA) dan Seksyen 35 Akta COVID-19</b> adalah seperti berikut:</p>
      <br />
      <div className="inline-block text-center self-center">
        <div>10% x harga rumah x [jumlah hari tertunggak - tempoh pengecualian]</div>
        <div className="border border-brickfields dark:border-white" />
        <div>365</div>
      </div>
      <hr className="my-8 border-brickfields dark:border-inherit" />
      <p>According to Clause 28(2), owners may claim LAD for common facilities, below is the calculation formular:</p>
      <br />
      <div className="inline-block text-center self-center">
        <div>20% x harga rumah x 10% x [jumlah hari tertunggak - tempoh pengecualian*]</div>
        <div className="border border-brickfields dark:border-white" />
        <div>365</div>
        <sub>* It is not clear that Covid-19 Act exemption period is applicable to common facilities</sub>
      </div>
      <hr className="my-8 border-brickfields dark:border-inherit" />
      <div className="calculator">
        <p className="mb-4">You can utilize the calculator below to calculate the estimated LAD amount.<sup>2</sup></p>
        <div className="grid grid-cols-4 gap-3 items-center md:w-3/4 mx-auto">
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
            <label htmlFor="mco-offset-delay">
              <input
                id="mco-offset-delay"
                className="mr-2"
                type="checkbox"
                defaultChecked={showMCOOffset}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setShowMCOOffset(event.target.checked)}
              />
              Offset MCO Period
            </label>
          </div>
          <div className="col-span-4 text-center font-bold">Estimated LAD Amount</div>
          <div className="col-span-2 text-right">Unit</div>
          <div className="col-span-2 text-green-600 drop-shadow-xl">RM {ladUnitAmount.toFixed(2)}</div>
          <div className="col-span-2 text-right">Common Facilities</div>
          <div className="col-span-2 text-yellow-500">RM {ladCFAmount.toFixed(2)}</div>
          <div className="grid grids-cols-4 col-start-3">
          <label htmlFor="mco-offset-lad">
              <input
                id="mco-offset-lad"
                className="mr-2"
                type="checkbox"
                defaultChecked={mcoOffsetLAD}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setMCOOffsetLAD(event.target.checked)}
              />
              Offset MCO Period
            </label>
          </div>
          <div className="col-span-2 text-right font-bold">Total</div>
          <div className="col-span-2 text-green-400">RM {(ladUnitAmount + ladCFAmount).toFixed(2)}</div>
        </div>
      </div>
    </main>
  )
}