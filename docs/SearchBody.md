# finnhub.SearchBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **String** | Search query | 
**isins** | **String** | List of isin to search, comma separated (Max: 50). | [optional] 
**cusips** | **String** | List of cusip to search, comma separated (Max: 50). | [optional] 
**ciks** | **String** | List of SEC Center Index Key to search, comma separated (Max: 50). | [optional] 
**sedarIds** | **String** | List of SEDAR issuer number to search, comma separated (Max: 50). | [optional] 
**chIds** | **String** | List of Companies House number to search, comma separated (Max: 50). | [optional] 
**symbols** | **String** | List of symbols to search, comma separated (Max: 50). | [optional] 
**sedols** | **String** | List of sedols to search, comma separated (Max: 50). | [optional] 
**sources** | **String** | List of sources to search, comma separated (Max: 50). Look at &lt;code&gt;/filter&lt;/code&gt; endpoint to see all available values. | [optional] 
**forms** | **String** | List of forms to search, comma separated (Max: 50). Look at &lt;code&gt;/filter&lt;/code&gt; endpoint to see all available values. | [optional] 
**gics** | **String** | List of gics to search, comma separated (Max: 50). Look at &lt;code&gt;/filter&lt;/code&gt; endpoint to see all available values. | [optional] 
**naics** | **String** | List of sources to search, comma separated (Max: 50). Look at &lt;code&gt;/filter&lt;/code&gt; endpoint to see all available values. | [optional] 
**exhibits** | **String** | List of exhibits to search, comma separated (Max: 50). Look at &lt;code&gt;/filter&lt;/code&gt; endpoint to see all available values. | [optional] 
**exchanges** | **String** | List of exchanges to search, comma separated (Max: 50). Look at &lt;code&gt;/filter&lt;/code&gt; endpoint to see all available values. | [optional] 
**countries** | **String** | List of sources to search, comma separated (Max: 50). Look at &lt;code&gt;/filter&lt;/code&gt; endpoint to see all available values. | [optional] 
**acts** | **String** | List of SEC&#39;s exchanges act to search, comma separated. Look at &lt;code&gt;/filter&lt;/code&gt; endpoint to see all available values. | [optional] 
**caps** | **String** | List of market capitalization to search, comma separated. Look at &lt;code&gt;/filter&lt;/code&gt; endpoint to see all available values. | [optional] 
**fromDate** | **String** | Search from date in format: YYYY-MM-DD, default from the last 2 years | [optional] 
**toDate** | **String** | Search to date in format: YYYY-MM-DD, default to today | [optional] 
**page** | **String** | Use for pagination, default to page 1 | [optional] 
**sort** | **String** | Sort result by, default: sortMostRecent. Look at &lt;code&gt;/filter&lt;/code&gt; endpoint to see all available values. | [optional] 
**highlighted** | **Boolean** | Enable highlight in returned filings. If enabled, only return 10 results each time | [optional] 


