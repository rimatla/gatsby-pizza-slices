import React from 'react';
import useLatestData from '../utils/useLatestData';

function CurrentlySlicing({ slicemasters }) {
  return (
    <div>
      <p>CurrentlySlicing</p>
    </div>
  );
}

function HotSlices({ hotSlices }) {
  return (
    <div>
      <p>Hot Slices</p>
    </div>
  );
}

export default function HomePage() {
  const { slicemasters, hotSlices } = useLatestData();
  // console.log(result);
  return (
    <>
      <div className="center">
        <h1>The Best Pizza Downtown</h1>
        <p>Open 11am to 11pm Every Day</p>
        <div>
          <CurrentlySlicing slicemasters={slicemasters} />
          <HotSlices hotSlices={hotSlices} />
        </div>
      </div>
    </>
  );
}

// get data straight from Sanity
