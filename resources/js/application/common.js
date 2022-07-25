export const getThumbUri = (size, uri) => {
    if (uri) {
        let thumbDir = "";
        switch (size) {
            case "150x150":
                thumbDir = "thumb150x150";
                break;
            case "300x300":
                thumbDir = "thumb300x300";
                break;
            default:
                return console.error(
                    "Requested thumbnail image size is not valid"
                );
        }
        //Ensure that the provided uri begins with /
        uri = getImageUri(uri);
        //Split to array
        let splited = uri.split("/");
        //Add the thumbnail path before the last element
        splited.splice(splited.length - 1, 0, thumbDir);
        //Rejoin the array elements to string with /
        return splited.join("/");
    } else {
        return;
    }
};
export const getImageUri = (uri) => {
    return uri.startsWith("/") ? uri : "/" + uri;
};
export const extractKeywords = (posts, language) => {
    const extractedKeywords = posts
        .filter((post) => post.tags.length > 0)
        .map((post) => post.tags.map((tag) => tag.keyword[language]));
    const keywordsArray = extractedKeywords && [].concat(...extractedKeywords);
    const uniqueKeywordsArray = [...new Set(keywordsArray)];
    const keywords = uniqueKeywordsArray.toString();
    return keywords;
};
