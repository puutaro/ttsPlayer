
name=Delete
|icon=cancel
|jsPath=SIMPLE_DELETE
,

name=Rename
|icon=edit_frame
|jsPath=RENAME
,

name=Show
|icon=play
|jsPath=CAT,


name=Play
|icon=play
|actionImport=
    `${cmdTtsPlayerTtsAction}`
|replace=
    TEMP_PLAY_CON=
        `${ITEM_NAME}`
    !EXTRA_CONTENT=
        `${jsF.r("${cmdTtsPlayerPlayInfoPath}")} ${jsPath.basename("${ITEM_NAME}")}`
,
