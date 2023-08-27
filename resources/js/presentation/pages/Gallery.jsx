import PageWrapper from "../components/PageWrapper";
import { useFetchGalleries } from "../../infrastructure/APIHandler";
import { useTranslation } from "react-i18next";
import { getThumbUri, getImageUri } from "../../application/common";
import VenoBox from "venobox";
import { useEffect } from "react";
export const Gallery = () => {
    const { t, i18n } = useTranslation();
    const { data, loading } = useFetchGalleries();
    const galleries = data;
    useEffect(() => {
        new VenoBox({ selector: ".venobox", share: true });
    }, [galleries]);
    const title = t("gallery");
    const description = t("gallery");
    const keywords = [t("image gallery"), t("video gallery")].toString();
    return (
        <PageWrapper
            title={title}
            header={title}
            keywords={keywords}
            description={description}
            loading={loading}
        >
            <section className="w3-container w3-margin-bottom">
                <h2 className="w3-row w3-padding w3-blue-grey w3-round">
                    {t("image gallery")}
                    {" + "}
                    {t("video gallery")}
                </h2>
                <div className="w3-row w3-margin">
                    {galleries[0] &&
                        galleries.map((gallery) => (
                            <div
                                key={gallery.id}
                                className="venobox gallery__card w3-col s1 m4 l4 w3-padding s3 w3-mobile"
                                data-href={
                                    gallery.video
                                        ? gallery.video
                                        : getImageUri(gallery.image)
                                }
                                data-gall={t("image gallery")}
                                title={gallery.description[i18n.language]}
                                data-vbtype={gallery.video && "video"}
                            >
                                <div className="w3-card-4 w3-round w3-center">
                                    <img
                                        className="gallery__thumbnail"
                                        src={getThumbUri(
                                            "300x300",
                                            gallery.image
                                        )}
                                        alt={gallery.title[i18n.language]}
                                        loading="lazy"
                                    />
                                    {gallery.video && (
                                        <i className="gallery__playicon fa-solid fa-play" />
                                    )}
                                    <div className="w3-container w3-center">
                                        <p className="w3-text-teal gallery__caption ">
                                            {gallery.title[i18n.language]}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </section>
        </PageWrapper>
    );
};
export default Gallery;
