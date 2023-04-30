import React, {useMemo} from "react";
import "./Button.css"

// React ile HTML etiketleri oluştururken dikkat etmemz gereken farklar:
// CSS class belirtmek için class yerine className kullanıyoruz
// CSS import ederken from ihtiyacımız yoktur
// Inline css kuralları yazılırken {{ css kuralları buraya }}
// Inline css kuralları yazılırken propertylerde camelCase kullanıyoruz
// Inline css kuralları yazılırken aralarda noktalı virgün yerine tek virgül kullanılır
// Inline css kuralları yazılırken sayı ifadeleri aynı şekilde ancak stringler " değer " olacak şekilde olmalıdır.
// Inline css kuralları yazılırken = yerine : kullanılmalıdır.


function Button({butonMetni}) {


    return (
        <button className="button-container" style={{ borderRadius:10 }} >{butonMetni}</button>
    )

}

export default Button;