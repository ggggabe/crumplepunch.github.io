import React from 'react'
import ReactMarkdown from 'react-markdown'

export const JournalHeading = ({ title, subtitle }) =>
  <>
    <h1>{title}</h1>
    {subtitle && (<h2>{subtitle}</h2>)}
  </>

export const JournalBody = ({ mdFile }) => (
  <ReactMarkdown source={mdFile} />
)

export const JournalEntry = props => <JournalBody {...props} />
