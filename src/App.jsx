import { useState } from 'react'

import stormLogo from './assets/stormlogo.png'
import sunnyImg from './assets/sunny.png'
import forwardIcon from './assets/forward.svg'
import portIcon from './assets/port.svg'
import starboardIcon from './assets/starboard.svg'
import aftIcon from './assets/aft.svg'
import boatIcon from './assets/boat.svg'
import './App.css'

const SINGLEMODES = {
  ARRANGED: 'arranged',
  GRID: 'grid'
}

function App() {

  const [selectedItem, setSelectedItem] = useState(0)
  const [singleMode, setSingleMode] = useState(SINGLEMODES.ARRANGED)

  return (
    <div className="h-screen flex flex-col">
      {/* Fixed header */}
      <div className="h-[50px] shrink-0 bg-black text-white flex items-center px-4">
        <div className="flex w-full justify-between items-center">
          {/* Left */}
          <div className="font-bold">
            <img src={stormLogo} alt="Storm" />
          </div>

          {/* Center */}
          <div className="text-sm"></div>

          {/* Right */}
          <div className="text-sm">
            <button className="cursor-pointer bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
              Log Out
            </button>
          </div>
        </div>
      </div>

      {/* Body takes remaining height */}
      <div className="flex flex-1 overflow-hidden">
        {/* First column - fixed 250px, scrollable */}
        <div className="w-[300px] overflow-y-auto bg-gray-900">
          <div className="space-y-4">
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i} className={`${selectedItem === i ? 'border-orange-400' : 'border-transparent'} cursor-pointer bg-transparent rounded-2xl m-3 overflow-hidden p-2  border-4 hover:border-orange-200`} onClick={() => setSelectedItem(i)}>
                <div className="rounded-md overflow-hidden">
                  <div className="px-3 py-1 bg-black text-white text-sm">
                    USV Patroll 002{i + 1}
                  </div>
                  <div className="h-[120px]">
                    <img src={sunnyImg} className="w-100 h-[120px] object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second column - fills remaining space */}
        <div className="flex-1 flex flex-col bg-black text-white">
          {/* Column Header */}
          <div className="h-[50px] shrink-0 bg-gray-700 flex items-center justify-center">
            <h2 className="font-bold text-lg">USV Patroll 002-{selectedItem}</h2>

            <div className="mx-5">
              <button className={`${singleMode === SINGLEMODES.ARRANGED ? 'bg-gray-500' : 'bg-gray-800'} cursor-pointer hover:bg-gray-500 text-white py-2 rounded-ss rounded-es w-[120px]`} onClick={() => setSingleMode(SINGLEMODES.ARRANGED)}>
                Arranged
              </button>
              <button className={`${singleMode === SINGLEMODES.GRID ? 'bg-gray-500' : 'bg-gray-800'} cursor-pointer hover:bg-gray-500 text-white py-2 rounded-ee rounded-se w-[120px]`} onClick={() => setSingleMode(SINGLEMODES.GRID)}>
                Grid
              </button>
            </div>
          </div>

          {/* 2x2 grid */}
          <div className="flex-1 p-4">
            {singleMode === SINGLEMODES.GRID && (
              <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full">
                  <div
                    className="relative flex items-center justify-center bg-gray-800 rounded text-lg font-medium"
                  >
                    <div className="absolute left-[10px] top-[10px] px-4 py-2 bg-gray-900 rounded-md flex items-center z-1">
                      <img src={forwardIcon} className="me-2 w-[12px]" /><span className="text-sm uppercase">Forward</span>
                    </div>
                    <img src={sunnyImg} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div
                    className="relative flex items-center justify-center bg-gray-600 rounded text-lg font-medium"
                  >
                    <div className="absolute left-[10px] top-[10px] px-4 py-2 bg-gray-900 rounded-md flex items-center z-1">
                      <img src={portIcon} className="me-2 w-[12px]" /><span className="text-sm uppercase">Port</span>
                    </div>
                    <img src={sunnyImg} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div
                    className="relative flex items-center justify-center bg-gray-600 rounded text-lg font-medium"
                  >
                    <div className="absolute left-[10px] top-[10px] px-4 py-2 bg-gray-900 rounded-md flex items-center z-1">
                      <img src={starboardIcon} className="me-2 w-[12px]" /><span className="text-sm uppercase">Starboard</span>
                    </div>
                    <img src={sunnyImg} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div
                    className="relative flex items-center justify-center bg-gray-600 rounded text-lg font-medium"
                  >
                    <div className="absolute left-[10px] top-[10px] px-4 py-2 bg-gray-900 rounded-md flex items-center z-1">
                      <img src={aftIcon} className="me-2 w-[12px]" /><span className="text-sm uppercase">Aft</span>
                    </div>
                    <img src={sunnyImg} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
              </div>
            )}

            {/* {singleMode === SINGLEMODES.ARRANGED && (
              <div className="relative w-full h-full">
                  <div
                    className="absolute flex items-center justify-center bg-gray-600 rounded text-lg font-medium w-[500px] h-[300px]  left-[50%] ml-[-250px] top-[0px]"
                  >
                    <div className="absolute left-[10px] top-[10px] px-4 py-2 bg-gray-900 rounded-md flex items-center">
                      <img src={forwardIcon} className="me-2 w-[12px]" /><span className="text-sm uppercase">Forward</span>
                    </div>
                    Content
                  </div>
                  <div
                    className="absolute flex items-center justify-center bg-gray-600 rounded text-lg font-medium w-[500px] h-[300px] top-[50%] mt-[-150px]"
                  >
                    <div className="absolute left-[10px] top-[10px] px-4 py-2 bg-gray-900 rounded-md flex items-center">
                      <img src={portIcon} className="me-2 w-[12px]" /><span className="text-sm uppercase">Port</span>
                    </div>
                    Content
                  </div>
                  <div
                    className="absolute flex items-center justify-center bg-gray-600 rounded text-lg font-medium w-[500px] h-[300px] top-[50%] mt-[-150px] right-[0]"
                  >
                    <div className="absolute left-[10px] top-[10px] px-4 py-2 bg-gray-900 rounded-md flex items-center">
                      <img src={starboardIcon} className="me-2 w-[12px]" /><span className="text-sm uppercase">Starboard</span>
                    </div>
                    Content
                  </div>
                  <div
                    className="absolute flex items-center justify-center bg-gray-600 rounded text-lg font-medium w-[500px] h-[300px] left-[50%] ml-[-250px] bottom-[0px]"
                  >
                    <div className="absolute left-[10px] top-[10px] px-4 py-2 bg-gray-900 rounded-md flex items-center">
                      <img src={aftIcon} className="me-2 w-[12px]" /><span className="text-sm uppercase">Aft</span>
                    </div>
                    Content
                  </div>
              </div>
            )} */}

            {singleMode === SINGLEMODES.ARRANGED && (
              <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full h-full">
                <div />
                <div
                  className="relative flex items-center justify-center bg-gray-600 rounded text-lg font-medium"
                >
                  <div className="absolute left-[10px] top-[10px] px-4 py-2 bg-gray-900 rounded-md flex items-center z-1">
                    <img src={forwardIcon} className="me-2 w-[12px]" /><span className="text-sm uppercase">Forward</span>
                  </div>
                  <img src={sunnyImg} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div />

                <div
                  className="relative flex items-center justify-center bg-gray-600 rounded text-lg font-medium left-[40%]"
                >
                  <div className="absolute left-[10px] top-[10px] px-4 py-2 bg-gray-900 rounded-md flex items-center z-1">
                    <img src={portIcon} className="me-2 w-[12px]" /><span className="text-sm uppercase">Port</span>
                  </div>
                  <img src={sunnyImg} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="flex items-center justify-center">
                  <img src={boatIcon} className="h-60" />
                </div>
                <div
                  className="relative flex items-center justify-center bg-gray-600 rounded text-lg font-medium right-[40%]"
                >
                  <div className="absolute left-[10px] top-[10px] px-4 py-2 bg-gray-900 rounded-md flex items-center z-1">
                    <img src={starboardIcon} className="me-2 w-[12px]" /><span className="text-sm uppercase">Starboard</span>
                  </div>
                  <img src={sunnyImg} className="absolute inset-0 w-full h-full object-cover" />
                </div>

                <div />
                <div
                  className="relative flex items-center justify-center bg-gray-600 rounded text-lg font-medium"
                >
                  <div className="absolute left-[10px] top-[10px] px-4 py-2 bg-gray-900 rounded-md flex items-center z-1">
                    <img src={aftIcon} className="me-2 w-[12px]" /><span className="text-sm uppercase">Aft</span>
                  </div>
                  <img src={sunnyImg} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div />
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
