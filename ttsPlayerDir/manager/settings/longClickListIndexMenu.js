
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

name=Copy
|icon=copy
|js=
    var=fileList
    ?func=jsFileSystem.showFullFileList
    ?args=
        dirPath=`${cmdTtsPlayerPlayListTableDirPath}`
        &extraMapCon=`
            prefix=${TTS_PREFIX}
            |excludeFiles=
                ${cmdTtsPlayerPreviousTtsPlayListName}
                ?${cmdTtsPlayerLikePlayListName}
        `
|actionImport=
    `${cmdTtsPlayerCopyToOtherAction}`
|replace=
    COPY_TSV_PATH_TO_TYPE_CON=`${fileList}`
|alter=`
    shellIfPath=JUDGE_LIST_DIR
    |ifArgs=
        tsvPath=${cmdTtsPlayerManagerListIndexTsvPath}
        ?tsvValue=${cmdTtsPlayerLikePlayListPath}
    |actionImport=`,


name=Play
|icon=play
|actionImport=
    `${cmdTtsPlayerTtsAction}`
|replace=
    TEMP_PLAY_CON=
        `${ITEM_NAME}`
    ?EXTRA_CONTENT=
        `${jsF.r("${cmdTtsPlayerPlayInfoPath}")} ${jsPath.basename("${ITEM_NAME}")}`
,
