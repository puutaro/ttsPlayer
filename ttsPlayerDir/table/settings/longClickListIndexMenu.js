
name=Delete
|icon=cancel
|jsPath=SIMPLE_DELETE
,

name=Copy
|icon=copy
|js=
    var=fileList
    ?func=jsFileSystem.showFullFileList
    ?args=
        dirPath=`${cmdYoutuberPlayListTableDirPath}`
        &extraMapCon=`
            prefix=${TUBE_PREFIX}
            |excludeFiles=
                ${cmdYoutuberPreviousMusicPlayListName}
                ?${cmdYoutuberLikeMusicPlayListName}
                ?${cmdYoutuberWebSearchPlayListName}
            `
    ?method=`replace("\t", "\n")`
    |actionImport=
        `${cmdTtsPlayerCopyToOtherAction}`
        |replace=
            COPY_TSV_PATH_TO_TYPE_CON=`${fileList}`
            ?ON_FITH_FILE=`ON`
            ?DIR_NAME=`${jsPath.basename("${ITEM_NAME}")}`,

name=Play
|icon=play
|js=
    var=itemName
    ?func=jsPath.trimAllExtend
    ?args=
        path=`${jsPath.basename("${ITEM_NAME}")}`
|actionImport=`${cmdTtsPlayerTtsAction}`
|replace=
    TEMP_PLAY_CON=
        `${jsTsv.getSr(
            "${INDEX_LIST_DIR_PATH}/${ITEM_NAME}"
        )}`
    ?EXTRA_CONTENT=`${itemName}`,
