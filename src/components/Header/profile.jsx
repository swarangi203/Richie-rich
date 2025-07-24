import React from 'react'

export default function profile() {
  return (
      <div className="flex justify-start mb-4">
          <select
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="p-2 rounded border"
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
          </select>
          <button className="ml-2 p-2 bg-gray-200 rounded">{t('accessibility')}</button>
        </div>
  )
}
