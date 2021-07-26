# finnhub.HistoricalNBBO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**s** | **String** | Symbol. | [optional] 
**skip** | **Number** | Number of ticks skipped. | [optional] 
**count** | **Number** | Number of ticks returned. If &lt;code&gt;count&lt;/code&gt; &lt; &lt;code&gt;limit&lt;/code&gt;, all data for that date has been returned. | [optional] 
**total** | **Number** | Total number of ticks for that date. | [optional] 
**av** | **[Number]** | List of Ask volume data. | [optional] 
**a** | **[Number]** | List of Ask price data. | [optional] 
**ax** | **[String]** | List of venues/exchanges - Ask price. A list of exchange codes can be found &lt;a target&#x3D;\&quot;_blank\&quot; href&#x3D;\&quot;https://docs.google.com/spreadsheets/d/1Tj53M1svmr-hfEtbk6_NpVR1yAyGLMaH6ByYU6CG0ZY/edit?usp&#x3D;sharing\&quot;,&gt;here&lt;/a&gt; | [optional] 
**bv** | **[Number]** | List of Bid volume data. | [optional] 
**b** | **[Number]** | List of Bid price data. | [optional] 
**bx** | **[String]** | List of venues/exchanges - Bid price. A list of exchange codes can be found &lt;a target&#x3D;\&quot;_blank\&quot; href&#x3D;\&quot;https://docs.google.com/spreadsheets/d/1Tj53M1svmr-hfEtbk6_NpVR1yAyGLMaH6ByYU6CG0ZY/edit?usp&#x3D;sharing\&quot;,&gt;here&lt;/a&gt; | [optional] 
**t** | **[Number]** | List of timestamp in UNIX ms. | [optional] 
**c** | **[[String]]** | List of quote conditions. A comprehensive list of quote conditions code can be found &lt;a target&#x3D;\&quot;_blank\&quot; href&#x3D;\&quot;https://docs.google.com/spreadsheets/d/1iiA6e7Osdtai0oPMOUzgAIKXCsay89dFDmsegz6OpEg/edit?usp&#x3D;sharing\&quot;&gt;here&lt;/a&gt; | [optional] 


