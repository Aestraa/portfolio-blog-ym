import { Template, tinaTableTemplate } from "tinacms";


export const richTextComponents: Template[] = [

    tinaTableTemplate,
    {
        name: "VideoPlayer",
        label: "VideoPlayer",
        fields: [
            {
                name: "url",
                type: "string",
                label: "Video URL",
            },
        ],
        ui: {
            defaultItem: {
                url: "https://www.youtube.com/watch?v=Q8TXgCzxEnw",
            },
        }
    },
    {
        name: "CaptionnedImage",
        label: "Label Image",
        fields: [
            {
                name: "imgURL",
                type: "image",
                label: "Image URL",
            },
            {
                name: "caption",
                type: "string",
                label: "Caption",
            },
            {
                name: "alt",
                type: "string",
                label: "Image alt text",
            },

        ],
    },
    {
        name: "TweetEmbed",
        label: "Tweet",
        ui: {
            defaultItem: {
                tweetId: "12345",
            },
        },
        fields: [
            {
                name: "tweetId",
                type: "string",
                label: "Tweet ID",
                description: "The ID of the tweet. You can find this in the URL of the tweet.",
            },
        ],
    },
    {
        name: "TextBox",
        label: "Text Box",
        fields: [
            {
                name: "text",
                type: "rich-text",
                label: "Text",
            },
        ],
    },
    {
        name: "PullQuote",
        label: "Pull Quote",
        ui: {
            defaultItem: {
                quote: "This is a pull quote",
            },
        },
        fields: [
            {
                name: "text",
                type: "string",
                label: "Text",
            },
            {
                name: "author",
                type: "string",
                label: "Author",
                description: "The person who said the quote",
            },
            {
                name: "authorLink",
                label: "Author Link",
                description: "A link to the author's website or social media profile",
                type: "string",
            },
        ],
    },
]