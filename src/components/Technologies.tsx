import { useState, useEffect } from 'react'
import type { Technology } from '../types/technology'

const loadTechnologies = async (): Promise<Technology[]> => {
  const res = await fetch('/technologies.json')
  const data: Technology[] = await res.json()
  return data
}

const badgeColors: Record<string, string> = {
  Popular: 'bg-sky-50 text-sky-600',
  Versatile: 'bg-emerald-50 text-emerald-600',
  Fast: 'bg-amber-50 text-amber-600',
  Standard: 'bg-green-50 text-green-600',
  'Top SQL': 'bg-blue-50 text-blue-600',
  Cache: 'bg-rose-50 text-rose-600',
  Ubiquitous: 'bg-yellow-50 text-yellow-700',
  Essential: 'bg-indigo-50 text-indigo-600',
  Robust: 'bg-orange-50 text-orange-600',
  Modern: 'bg-teal-50 text-teal-600',
  Containers: 'bg-cyan-50 text-cyan-600',
  Query: 'bg-pink-50 text-pink-600',
  NoSQL: 'bg-emerald-50 text-emerald-700',
  VCS: 'bg-red-50 text-red-600'
}

export default function Technologies () {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [myStack, setMyStack] = useState<Technology[]>([])

  useEffect(() => {
    loadTechnologies()
      .then(data => setTechnologies(data))
      .catch((err: unknown) => console.error(err))
  }, [])

  const handleAddToStack = (tech: Technology): void => {
    const isAlreadyAdded = myStack.some(item => item.id === tech.id)
    if (isAlreadyAdded) {
      alert(`${tech.name} is already in your stack!`)
      return
    }
    setMyStack(prev => [...prev, tech])
  }

  const handleRemoveItem = (id: string): void => {
    setMyStack(prev => prev.filter(item => item.id !== id))
  }

  const handleRemoveAll = (): void => {
    setMyStack([])
  }

  return (
    <section className='py-10 mb-10 bg-white' id='technologies'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-8'>
          <h2 className='text-3xl font-bold text-gray-900'>
            Explore the <span className='text-[#DB2777]'>Technologies</span>
          </h2>
          <p className='mt-2 text-gray-500 text-sm'>
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 items-start'>
          <div className='lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {technologies.map(tech => {
              const isAdded = myStack.some(item => item.id === tech.id)

              return (
                <div
                  key={tech.id}
                  className='border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col justify-between'
                >
                  <div>
                    <div className='flex items-center justify-between mb-3'>
                      <div className='w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50 p-2'>
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className='w-full h-full object-contain'
                        />
                      </div>
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                          badgeColors[tech.badge] || 'bg-sky-50 text-sky-500'
                        }`}
                      >
                        {tech.badge}
                      </span>
                    </div>

                    <h3 className='text-lg font-bold text-gray-900'>
                      {tech.name}
                    </h3>
                    <p className='mt-1 text-xs text-gray-500 leading-relaxed min-h-[40px]'>
                      {tech.description}
                    </p>

                    <div className='mt-4 flex items-center gap-2 text-xs text-gray-600'>
                      <span className='bg-gray-100 px-2 py-0.5 rounded text-gray-700'>
                        {tech.category}
                      </span>
                      <span className='bg-gray-100 px-2 py-0.5 rounded'>
                        {tech.difficulty}
                      </span>
                      <span className='ml-auto font-medium text-gray-800'>
                        <span className='text-amber-400'>★</span> {tech.rating}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleAddToStack(tech)}
                    disabled={isAdded}
                    className={`mt-5 w-full py-2 rounded-xl text-xs font-medium ${
                      isAdded
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-slate-900 text-white hover:bg-black'
                    }`}
                  >
                    {isAdded ? 'Added to Stack' : 'Add to Stack'}
                  </button>
                </div>
              )
            })}
          </div>

          <div className='sticky top-20 border border-gray-100 rounded-2xl p-5 shadow-sm'>
            <h3 className='font-bold text-gray-900'>Your Stack</h3>
            <p className='text-xs text-gray-400 mb-4'>
              {myStack.length}{' '}
              {myStack.length === 1 ? 'Technology' : 'Technologies'} Selected
            </p>

            {myStack.length === 0 ? (
              <div className='py-8 text-center border border-dashed border-gray-200 rounded-xl'>
                <p className='text-xs text-gray-400'>
                  No technology selected yet.
                </p>
                <p className='text-[11px] text-gray-400 mt-1'>
                  Click "Add to Stack" to select.
                </p>
              </div>
            ) : (
              <>
                <div className='space-y-3'>
                  {myStack.map(item => (
                    <div
                      key={item.id}
                      className='flex items-center justify-between p-2 border border-gray-100 rounded-xl'
                    >
                      <div className='flex items-center gap-2'>
                        <div className='w-7 h-7 rounded bg-gray-50 flex items-center justify-center p-0.5'>
                          <img
                            src={item.icon}
                            alt={item.name}
                            className='w-full h-full object-contain'
                          />
                        </div>
                        <div>
                          <h4 className='text-xs font-bold text-gray-800 leading-none'>
                            {item.name}
                          </h4>
                          <span className='text-[10px] text-gray-400'>
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className='text-gray-400 hover:text-gray-600 text-xs px-1'
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleRemoveAll}
                  className='mt-5 w-full py-2 text-xs font-semibold text-rose-500 border border-rose-200 rounded-xl hover:bg-rose-50'
                >
                  Remove All
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
