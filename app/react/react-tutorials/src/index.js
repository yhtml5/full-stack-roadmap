import React from 'react'
import ReactDOM from 'react-dom'

import App from './demo/app/App'
import {ButtonToggle, LoggingButton} from './demo/button/ButtonToggle'
import Blog from './demo/list/ListBlog'
import Clock from  './demo/clock/ClockClass'
import Calculator from './demo/LiftingStateUp/Calculator'
import CalculatorSync from './demo/LiftingStateUp/CalculatorSync'
import Comment from './demo/comment/Comment'
import CommentData from './demo/comment/CommentData'
import DialogSignUp from './demo/Dialog/DialogSignUp'
import FormatName from './demo/formatName/FormatName.js'
import FormName from './demo/forms/FormInput'
import FormTeaxtarea from './demo/forms/FormTextarea'
import FormSelect from './demo/forms/FormSelect'
import LoginControl from  './demo/login/LoginControl'
import Mailbox from  './demo/mailbox/Mailbox'
import MailboxData from  './demo/mailbox/MailboxData'
import ListNumber from './demo/list/ListNumber'
import {numbers, posts} from './demo/list/ListData'
import Search from './demo/search/Search'
import SearchStatic from './demo/search/SearchStatic'
import SearchData from './demo/search/SearchData'
import WarningBanner from './demo/debug/WarningBanner'
import Welcomes from './demo/welcome/Welcomes'

import './demo/clock/Clock';
import './index.css';

const Index = (
    <div>
        <App />
        <LoginControl/>
        <ButtonToggle/>
        <LoggingButton/>
        <hr/>
        welcomes:
        <Welcomes />
        clock：
        <br/>
        <br/>
        <Clock/>
        <Clock/>
        <br/>
        format name:
        <hr/>
        <FormatName/>
        comment:
        <hr/>
        <Comment
            date={CommentData.date}
            text={CommentData.text}
            author={CommentData.author}/>
        <hr/>
        <Mailbox unreadMessages={MailboxData}/>
        <WarningBanner/>
        <br/>
        <ListNumber numbers={numbers}/>
        <br/>
        <Blog posts={posts}/>
        <hr/>
        forms:
        <FormName/>
        <br/>
        <FormTeaxtarea/>
        <br/>
        <FormSelect/>
        <br/>
        <Calculator/>
        <br/><br/>
        <hr/>
        <br/><br/>
        <CalculatorSync/>
        <br/>
        <DialogSignUp/>
        <br/>
        <hr/>
        <SearchStatic products={SearchData} />,
        <Search products={SearchData} />,
        <br/>

        <br/>
        <br/>
    </div>
)

ReactDOM.render(
    Index,
    document.getElementById('root')
);
