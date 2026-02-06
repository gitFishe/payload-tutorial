import type {FieldHook} from "payload";
import {Article} from "@/payload-types";
import {convertLexicalToPlaintext} from "@payloadcms/richtext-lexical/plaintext";

const MAX_SUMMERY_LENGTH = 160;
export const generateContentSummeryHook: FieldHook<Article, string> = ({ value, data }) => {
    if (value) return value;
    if (!data?.content) return '';
    const text = convertLexicalToPlaintext({data: data?.content}).trim();
    if(!text) return '';
    return text.length > MAX_SUMMERY_LENGTH ? `${text.slice(0, MAX_SUMMERY_LENGTH).trim()}...` : text;
}