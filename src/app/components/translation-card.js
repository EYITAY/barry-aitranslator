import { ArrowRight } from "lucide-react";

const languageToCountry = {
  en: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  es: "🇪🇸",
  fr: "🇫🇷",
  yo: "",
  nl: ""
};

export const TranslationCard = ({ group }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-full flex flex-col">
      <div className="flex items-center justify-center mb-4 text-2xl">
        {group.source_language && group.target_language ? (
          <>
            <span>{languageToCountry[group.source_language]}</span>
            <span className="mx-2 text-gray-500">{group.source_language.toUpperCase()}</span>
            <ArrowRight className="text-gray-400" />
            <span className="mx-2 text-gray-500">{group.target_language.toUpperCase()}</span>
            <span>{languageToCountry[group.target_language]}</span>
          </>
        ) : (
          <span>Unknown Languages</span>
        )}
      </div>
      <div className="flex-grow space-y-4">
        {group.source_texts.map((sourceText, index) => (
          <div
            key={`${group.source_language}_${group.target_language}_${index}`}
            className="border-b pb-4 last:border-b-0"
          >
            <div className="mb-2">
              <h3 className="font-semibold mb-1">Source</h3>
              <div>{sourceText || "No source text available"}</div>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Translations</h3>
              <div>{group.translated_texts[index] || "No translation available"}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};