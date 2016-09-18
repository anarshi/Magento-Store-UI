package models;
import java.awt.Color;
import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.awt.Dimension;
import java.io.ByteArrayInputStream;
import java.io.InputStream;

import org.apache.commons.lang3.text.WordUtils;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.common.PDRectangle;
import org.apache.pdfbox.pdmodel.edit.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDFont;
import org.apache.pdfbox.pdmodel.font.PDTrueTypeFont;
import org.apache.pdfbox.pdmodel.interactive.action.type.PDActionURI;
import org.apache.pdfbox.pdmodel.interactive.annotation.PDAnnotationLink;
import org.apache.pdfbox.pdmodel.common.PDRectangle;

import javax.imageio.ImageIO;

import org.apache.pdfbox.pdmodel.graphics.xobject.PDXObjectImage;
import org.apache.pdfbox.pdmodel.graphics.xobject.PDPixelMap;

import java.awt.image.BufferedImage;


import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.phantomjs.PhantomJSDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriverService;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import org.openqa.selenium.Point;



public class PDFBoxDUtil {
    Color dark = new Color(0.2f, 0.2f, 0.2f);
    Color darkDark = new Color(37,42,48);
    Color topName = new Color(0.3f, 0.3f, 0.3f);
    Color light = new Color(1f, 1f, 1f);
    Color lightRed= new Color(229,50,37);

	public PDDocument printAll(String location, Map<String, String> mp, List<String> channelTags,List<Eyeballs> eyeballs
								, List<InsightTrafficSource> ytSearchList
								,YoutubeSearchSource ytSource,Map<String,List<VideoRanking>> videoRankingMap
								,List<CompetitorChannel> competitorChannelList,List<SuggestedVideo> suggestedVideos
								,byte[] assWewbsite, byte[] bestTimeToUpload,
								Map<String,String> mstVideoTrafficSource
								,byte[] page52ImageByte
								,byte[] page50ImageByte
								,byte[] page15ImageByte
								,byte[] page30ImageByte
								,byte[] page31ImageByte
								,byte[] page55ImageByte) throws Exception {

		PDDocument doc = PDDocument.load(new File("original.pdf"));
		
		PDFont gothamBold = PDTrueTypeFont.loadTTF(doc, "gotham_bold.ttf");
		PDFont gothamBook = PDTrueTypeFont.loadTTF(doc, "gotham_book.ttf");
		//PDFont monsseratLight = PDTrueTypeFont.loadTTF(doc, "monsserat_light.ttf");

		PDPage page1 = (PDPage) doc.getDocumentCatalog().getAllPages().get(0);
		PDPage page5 = (PDPage) doc.getDocumentCatalog().getAllPages().get(4);
		PDPage page7 = (PDPage) doc.getDocumentCatalog().getAllPages().get(6);
		PDPage page9 = (PDPage) doc.getDocumentCatalog().getAllPages().get(8);
		PDPage page11 = (PDPage) doc.getDocumentCatalog().getAllPages().get(10);
		PDPage page13 = (PDPage) doc.getDocumentCatalog().getAllPages().get(12);
		PDPage page15 = (PDPage) doc.getDocumentCatalog().getAllPages().get(14);
		PDPage page17 = (PDPage) doc.getDocumentCatalog().getAllPages().get(16);
		PDPage page20 = (PDPage) doc.getDocumentCatalog().getAllPages().get(19);
		PDPage page22 = (PDPage) doc.getDocumentCatalog().getAllPages().get(21);
		PDPage page25 = (PDPage) doc.getDocumentCatalog().getAllPages().get(24);
		PDPage page27 = (PDPage) doc.getDocumentCatalog().getAllPages().get(26);
		PDPage page30 = (PDPage) doc.getDocumentCatalog().getAllPages().get(29);
		PDPage page31 = (PDPage) doc.getDocumentCatalog().getAllPages().get(30);
		PDPage page33 = (PDPage) doc.getDocumentCatalog().getAllPages().get(32);
		PDPage page36 = (PDPage) doc.getDocumentCatalog().getAllPages().get(35);
		PDPage page37 = (PDPage) doc.getDocumentCatalog().getAllPages().get(36);
		PDPage page39 = (PDPage) doc.getDocumentCatalog().getAllPages().get(38);
		PDPage page41 = (PDPage) doc.getDocumentCatalog().getAllPages().get(40);
		PDPage page43 = (PDPage) doc.getDocumentCatalog().getAllPages().get(42);
		PDPage page46 = (PDPage) doc.getDocumentCatalog().getAllPages().get(45);
		PDPage page48 = (PDPage) doc.getDocumentCatalog().getAllPages().get(47);
		PDPage page50 = (PDPage) doc.getDocumentCatalog().getAllPages().get(49);
		PDPage page52 = (PDPage) doc.getDocumentCatalog().getAllPages().get(51);
		PDPage page55 = (PDPage) doc.getDocumentCatalog().getAllPages().get(53);
		PDPage page56 = (PDPage) doc.getDocumentCatalog().getAllPages().get(54);
		PDPage page57 = (PDPage) doc.getDocumentCatalog().getAllPages().get(55);
		PDPage page58 = (PDPage) doc.getDocumentCatalog().getAllPages().get(56);
		PDPage page60 = (PDPage) doc.getDocumentCatalog().getAllPages().get(58);
		PDPage page61 = (PDPage) doc.getDocumentCatalog().getAllPages().get(59);
		PDPage page62 = (PDPage) doc.getDocumentCatalog().getAllPages().get(60);
		PDPage page63 = (PDPage) doc.getDocumentCatalog().getAllPages().get(61);
		
		
		
		// PDAnnotationLink txtLink = new PDAnnotationLink();
		// PDActionURI action = new PDActionURI(); 
		// action.setURI("http://funnelbox.com/");
		// txtLink.setAction(action);
		// PDRectangle position = new PDRectangle();
	 //    position.setLowerLeftX(760);
	 //    position.setLowerLeftY(20); 
	 //    position.setUpperRightX(918); 
	 //    position.setUpperRightY(75); 
	 //    txtLink.setRectangle(position);
		
	    
	    String[] ALL = new String[] {
	    		"ADVERTISING",
	    		"ANNOTATION",
	    		"EXT_URL",
	    		"NO_LINK_EMBEDDED",
	    		"NO_LINK_OTHER",
	    		"NOTIFICATION",
	    		"PLAYLIST",
	    		"PROMOTED",
	    		"RELATED_VIDEO",
	    		"SUBSCRIBER",
	    		"YT_CHANNEL",
	    		"YT_OTHER_PAGE",
	    		"YT_SEARCH",
	    		"ADVERTISING_VIEWS",
	    		"ANNOTATION_VIEWS",
	    		"EXT_URL_VIEWS",
	    		"NO_LINK_EMBEDDED_VIEWS",
	    		"NO_LINK_OTHER_VIEWS",
	    		"NOTIFICATION_VIEWS",
	    		"PLAYLIST_VIEWS",
	    		"PROMOTED_VIEWS",
	    		"RELATED_VIDEO_VIEWS",
	    		"SUBSCRIBER_VIEWS",
	    		"YT_CHANNEL_VIEWS",
	    		"YT_OTHER_PAGE_VIEWS",
	    		"YT_SEARCH_VIEWS",
				"COPY_PASTE",
				"OTHER",
				"TUMBLR",
				"TWITTER",
				"UNKNOWN",
				"VERIZON_MMS",
				"VIBER",
				"WECHAT",
				"WEIBO",
				"WHATS_APP",
				"WYKOP",
				"YAHOO",
				"VKONTAKTE",
				"ODNOKLASSNIKI",
			    "RAKUTEN",
				"KAKAO",
				"MOBILE",
				"TABLET",
				"GAME_CONSOLE",
				"UNKNOWN_PLATFORM",
				"TV",
				"DESKTOP"
				 };
		
	    for (String s : ALL)
	    	if (!mp.containsKey(s))
	    		mp.put(s, "0");
	    

	    int dx = 7;

	    PDPageContentStream contentStream = new PDPageContentStream(doc, page5, true, true);
		printImage(mp.get("bannerImageUrl"),contentStream,doc);
		contentStream.close();

		contentStream = new PDPageContentStream(doc,page17,true,true);
		String toPrint = formatNumberString(Long.parseLong(mp.get("ADVERTISING_VIEWS")));
		printFromReverse(new PDFText(toPrint,dx + 710,240,gothamBold,24),contentStream,light);
		print(new PDFText("accounts for " + mp.get("ADVERTISING") + "% of",80,172,gothamBold,30),contentStream,darkDark);
		contentStream.close();

		int paragraphWidth2 = 100;
		System.out.println("ChannelName" + mp.get("channelTitle"));
		contentStream = new PDPageContentStream(doc,page1,true,true);
		PDFText firstPage = new PDFText(mp.get("channelTitle"),70,175,gothamBold,50);
		printBreakLineText(firstPage,contentStream,light,700);
		//print(new PDFText("90 Days ago metric",70,70,gothamBook,10),contentStream,light);
		contentStream.close();


		//float width = font.getStringWidth(text.substring(start,i)) / 1000 * fontSize;
        contentStream.close();

		contentStream = new PDPageContentStream(doc, page9, true, true);
		printCustomImage(mp.get("homeImageUrl"),contentStream,doc);
		contentStream.close();

		contentStream = new PDPageContentStream(doc, page11, true, true);
		printAboutImage(mp.get("homeImageUrl"),contentStream,doc);
		contentStream.close();

		contentStream = new PDPageContentStream(doc,page13,true,true);
		List<String> keywordsList = parseKeywords(mp.get("channelKeywords"));
		printBreakLineTextWordWrap(keywordsList,contentStream,14,gothamBook,darkDark,300);
		contentStream.close();

		contentStream  = new PDPageContentStream(doc, page15,true,true);
		printFromReverse(new PDFText(mp.get("numOfSubscribers"),dx + 700,230,gothamBold,24),contentStream,light);
		if(page15ImageByte != null){
			printImageByte(page15ImageByte,contentStream,doc);
		}else{
			System.out.println("Page15Iage is null");
		}
		contentStream.close();

		contentStream = new PDPageContentStream(doc, page20 , true , true);
		print(new PDFText(mp.get("minutesWatched"), 195, 310, gothamBook, 14), contentStream, light);
		print(new PDFText(mp.get("totalAverageMinutesWatched"), 405, 310, gothamBook, 14), contentStream, light);
		printFromReverse(new PDFText(mp.get("averageOfEachVideo"), dx + 700,230, gothamBold, 22), contentStream, light);
		int x = 0;
		int b = 1;
		for(Eyeballs ey : eyeballs){
				String vidDurationFormat ="";
				int vidDurationMin = Math.round(ey.averageViewDurations / 60);  
				int vidDurationsSec = ey.averageViewDurations - (vidDurationMin*60);

				if(vidDurationsSec >= 10)
					vidDurationFormat += vidDurationMin + ":" + vidDurationsSec;
				else
					vidDurationFormat  += vidDurationMin + ":0" + vidDurationsSec;

				print(new PDFText(vidDurationFormat + " or " + ey.averageViewPercentage + "% of video",400,230-(x*35),gothamBook,14),contentStream,lightRed);
				
				int fontSize = 14; // Or whatever font size you want.
				int paragraphWidth = 200;

				PDFText ct = new PDFText( b + "." + transformTextWithLength(ey.title,50),130,242 - (x*35),gothamBook,14);
				b++;
				printBreakLineTextWithLines(ct,contentStream,darkDark,160,1);

				x++;
		}
		x = 0;
		contentStream.close();

		contentStream = new PDPageContentStream(doc, page22 , true,true);
		printFromReverse(new PDFText(mp.get("PLAYLIST")+"%", dx+700,240,gothamBold, 22), contentStream, light);
		print(new PDFText(mp.get("PLAYLIST_VIEWS") + " views came from",84,275,gothamBold,34),contentStream,darkDark);
		contentStream.close();

		contentStream = new PDPageContentStream(doc,page25,true,true);
		printFromReverse(new PDFText(mp.get("RELATED_VIDEO")+"%",dx + 700,240,gothamBold,22),contentStream,light);
		Long fString = Long.parseLong(mp.get("RELATED_VIDEO_VIEWS"));
		print(new PDFText(formatNumberString(fString)+" views",80,280,gothamBold,30),contentStream,darkDark);
		print(new PDFText("come from suggested",80,200,gothamBold,30),contentStream,darkDark);
		print(new PDFText("videos viewes.",80,120),contentStream,darkDark);
		contentStream.close();

		contentStream = new PDPageContentStream(doc,page27,true , true);
		printFromReverse(new PDFText(mp.get("RELATED_VIDEO") + "%",dx + 700,240,gothamBold,22),contentStream,light);
		for(int i = 0 ; i<suggestedVideos.size() ; i++){
			printThumbnailImageByPosition(suggestedVideos.get(i).thumbnailUrl , 90 + (i*105), 210, 
											  90 , 100 , contentStream,doc);
			PDFText pdfTitle = new PDFText(suggestedVideos.get(i).title,90 + (i*105), 212 ,gothamBook,7);
			int numOfLines = countNumberOfLineBreak(pdfTitle,112);
			System.out.println("Number of lines breaks: " + numOfLines);
			printBreakLineText(pdfTitle,contentStream,darkDark,112);
							
			float chHeight = pdfTitle.font.getFontDescriptor().getFontBoundingBox().getHeight() / 1000 * pdfTitle.fontSize;
			System.out.println("FortmatNUber Lng: "+ formatNumberString(Long.parseLong(suggestedVideos.get(i).views)));
			print(new PDFText(suggestedVideos.get(i).views+ " Views",90 + (i*105),212 - (20+(numOfLines*7)),gothamBook,7),contentStream,darkDark);
		}
		contentStream.close();

		contentStream = new PDPageContentStream(doc,page30,true,true);
		print(new PDFText(mp.get("likes"),510,259,gothamBook,12),contentStream,darkDark);
		print(new PDFText(mp.get("dislikes"),527,243,gothamBook,12),contentStream,darkDark);
		print(new PDFText(mp.get("comments"),547,225,gothamBook,12),contentStream,darkDark);
		print(new PDFText(mp.get("shares"),523,209,gothamBook,12),contentStream,darkDark);
		printImageByte(page30ImageByte,contentStream,doc);
		PDFText engageText = new PDFText(mp.get("engagement")+"% engagement to views",463,170,gothamBold,12);
		print(engageText,contentStream,lightRed);
		 //begin to draw our line
        //contentStream.drawLine(440, 445.0 - .5, engageText.x + 50.0, engageText.y - .5);
		contentStream.close();

		contentStream = new PDPageContentStream(doc,page31,true,true);
		printImageByte(page31ImageByte,contentStream,doc);
		print(new PDFText(mp.get("COPY_PASTE")+"%",542,269,gothamBook,12),contentStream,darkDark);
		print(new PDFText(mp.get("OTHER")+"%",510,250,gothamBook,12),contentStream,darkDark);
		contentStream.close();

		contentStream  = new PDPageContentStream(doc,page37,true,true);
		int fontS = 24;
		int numOfChs = mp.get("YT_SEARCH_VIEWS").length();
		PDFText pdft = new PDFText(formatStringNumber(mp.get("YT_SEARCH_VIEWS")+"")+ " or " + mp.get("YT_SEARCH") + "% of the views",80,320,gothamBold,fontS);
		print(new PDFText(mp.get("YT_SEARCH")+"%", 80,240,gothamBold,22), contentStream, light);
		print(pdft,contentStream,darkDark);
		float cameFromPosition = gothamBold.getStringWidth(pdft.text.substring(0,pdft.text.length())) / 1000 * fontS;
		printFromReverse(new PDFText(" came from the", dx+cameFromPosition + 120 ,320,gothamBook,14),contentStream,darkDark);
		print(new PDFText("YouTube Search box.",80,302,gothamBook,14),contentStream,darkDark);

		int z = 0;

		print(new PDFText("Title: ",80,260,gothamBook,10),contentStream,lightRed);
		print(new PDFText("Minutes: ",300,260,gothamBook,10),contentStream,lightRed);
		print(new PDFText("Views",400,260,gothamBook,10),contentStream,lightRed);
		for(InsightTrafficSource insight : ytSearchList){
			print(new PDFText(insight.title,80,230-(z*20),gothamBook,10),contentStream,darkDark);
			print(new PDFText(insight.estimatedMinutesWatched+"",300,230-(z*20) ,gothamBook,10),contentStream,darkDark);

			float minutesWidth = gothamBook.getStringWidth(insight.estimatedMinutesWatched+"") / 1000.0f * 10;
			float viewsWidth = gothamBook.getStringWidth(insight.views + "") / 1000.0f * 10;
			print(new PDFText("(" + insight.estimatedMinutesWatchedPercent+"%)",300 + minutesWidth + 10,230-(z*20),gothamBook,10),contentStream,darkDark);
			print(new PDFText(insight.views + "",400,230 - (z*20),gothamBook,10),contentStream,darkDark);
			print(new PDFText("(" + insight.viewsPercent + "%)",(400 + viewsWidth + 10),230 - (z*20) ,gothamBook,10),contentStream,darkDark);
			z++;
		}
		z = 0;
		contentStream.close();

		contentStream = new PDPageContentStream(doc,page39,true,true);
		printTitlingImage("https://www.youtube.com/channel/" +mp.get("channelName") ,contentStream,doc);
		contentStream.close();

		contentStream = new PDPageContentStream(doc,page41,true,true);
		//PDFText descText = new PDFText(mp.get("descOfMostWachedVideo"),80,320,gothamBook,14);
		//printBreakLineTextWithLines(descText,contentStream,darkDark,500,12);
		printDescImage(mp.get("channelName"),contentStream,doc);
		contentStream.close();

		contentStream = new PDPageContentStream(doc,page43,true,true);
		List<String> mstVideoTagsList = parseKeywords(mp.get("mostWachedVideoTags"));
		System.out.println("mostWachedVideoTags : " + mstVideoTagsList);
		printBreakLineTextWordWrap(mstVideoTagsList,contentStream,14,gothamBook,darkDark,300);
		contentStream.close();

		contentStream = new PDPageContentStream(doc,page50,true,true);
		if(page50ImageByte != null){
			printImageByte(page50ImageByte,contentStream,doc);
		}
		contentStream.close();

		contentStream = new PDPageContentStream(doc,page52,true,true);
		print(new PDFText(mp.get("cardClicks"),685,240,gothamBook,22),contentStream,light);
		if(page52ImageByte != null){
			printImageByte(page52ImageByte,contentStream,doc);
		}
		contentStream.close();


		contentStream = new PDPageContentStream(doc,page55,true,true);
		printImageByte(page55ImageByte,contentStream,doc);
		print(new PDFText(mp.get("genderPercent")+ " of your viewers are " + mp.get("genderTag"), 460 ,260,gothamBold,14),contentStream,darkDark);
		print(new PDFText("Most of your viewers are", 460	,220,gothamBold,14),contentStream,darkDark);
		print(new PDFText("between  " + mp.get("ageGroupTag").substring(3) + " years old", 460,205,gothamBold,14),contentStream,darkDark);
		print(new PDFText(mp.get("countryTag") + " make up", 460,180,gothamBold,14),contentStream,darkDark);
		print(new PDFText(mp.get("countryPercent") + " of your views.", 460,155,gothamBold,14),contentStream,darkDark);
		contentStream.close();

		contentStream = new PDPageContentStream(doc,page56,true,true);
		print(new PDFText(mp.get("DESKTOP"),580,298,gothamBook,14),contentStream,lightRed);
		print(new PDFText(mp.get("MOBILE"),580,268,gothamBook,14),contentStream,lightRed);
		print(new PDFText(mp.get("TABLET"),580,240,gothamBook,14),contentStream,lightRed);
		print(new PDFText(mp.get("TV"),580,213,gothamBook,14),contentStream,lightRed);
		print(new PDFText(mp.get("GAME_CONSOLE"),580,182,gothamBook,14),contentStream,lightRed);
		contentStream.close();

		contentStream = new PDPageContentStream(doc,page58,true,true);
		print(new PDFText(mp.get("mostWachedVideoWatchTime"),410,280,gothamBook,14),contentStream,darkDark);
		print(new PDFText(mp.get("mostWachedVideoAverageDuration"),480,260,gothamBook,14),contentStream,darkDark);
		print(new PDFText(mp.get("mostWachedVideoViews"),370,245,gothamBook,14),contentStream,darkDark);
		print(new PDFText(mp.get("mostWachedVideoSixMonths") + " of views in last 6 months",320,225,gothamBook,14),contentStream,darkDark);
		print(new PDFText(mp.get("mostWachedVideoShares"),375,193,gothamBook,14),contentStream,darkDark);
		print(new PDFText(mp.get("mostWachedVideoLikes"),455,193,gothamBook,14),contentStream,darkDark);
		for (Map.Entry<String, String> entry : TrafficResources.trafficResources.entrySet())
		{		
			System.out.println("Etry1: " + entry);
			System.out.println("value OF entry: " +  entry.getValue());
		    if(mstVideoTrafficSource.get(entry.getKey()) != null){
		    	System.out.println("Uso yeeee");
		    	print(new PDFText(mstVideoTrafficSource.get(entry.getKey()) + "% views are came from " + entry.getValue(),320,140,gothamBook,14),contentStream,darkDark);
		    	break;
		    }
		}
		print(new PDFText(mp.get("mostWachedVideoComments"),575,193,gothamBook,14),contentStream,darkDark);
		print(new PDFText(transformTextWithLength(mp.get("mostWachedVideoTitle"),75),80,330,gothamBold,14),contentStream,darkDark);
		printThumbnailImage(mp.get("mostWachedVideoThumbnailUrl"),contentStream,doc);
		contentStream.close();

		contentStream = new PDPageContentStream(doc,page33,true,true);
		if(Long.parseLong(mp.get("numOfComments")) > 0){
			print(new PDFText("Viewers are",80,260,gothamBold,35),contentStream,darkDark);
			print(new PDFText("engaging with your",80,220,gothamBold,35),contentStream,darkDark);
			print(new PDFText("videos.",80,180,gothamBold,35),contentStream,darkDark);
		} else {
			print(new PDFText("Viewers are not",80,260,gothamBold,35),contentStream,darkDark);
			print(new PDFText("engaging with your",80,220,gothamBold,35),contentStream,darkDark);
			print(new PDFText("videos.",80,180,gothamBold,35),contentStream,darkDark);
		}
		
		printFromReverse(new PDFText(formatNumberString(Long.parseLong(mp.get("numOfComments"))) + " comments on",dx + 717,220,gothamBook,14),contentStream,light);
		printFromReverse(new PDFText(mp.get("publicWithNoComments") + " public videos",dx + 705,205,gothamBook,14),contentStream,light);
		contentStream.close();

		contentStream = new PDPageContentStream(doc,page57,true,true);
		int m = 0;
		int n = 1;
		for(InsightTrafficSource source : ytSearchList){
			print(new PDFText(transformTextWithLength(n + "." + source.title,35),130,288 - (m*30),gothamBook,12),contentStream,darkDark);
			print(new PDFText(source.views + " views",380,290 - (m*30),gothamBook,12),contentStream,lightRed);
			n++;
			m++;
		}
		m = 0;
		String toWriteViews = ytSource.views + "";
		PDFText viewsPDF = new PDFText(toWriteViews,548,210,gothamBold,20);
		print(viewsPDF,contentStream,light);
		float textWidthViews = viewsPDF.font.getStringWidth(viewsPDF.text) / 1000.0f * viewsPDF.fontSize;
		print(new PDFText("views",548+textWidthViews + 4,210,gothamBook,12),contentStream,light);

		String toWriteMinutes = ytSource.totalTime + "";
		PDFText minutesPDF = new PDFText(toWriteMinutes,548,185,gothamBold,20);
		print(minutesPDF,contentStream,light);
		float textWidthMinutes = minutesPDF.font.getStringWidth(minutesPDF.text) / 1000.0f * minutesPDF.fontSize;
		print(new PDFText("minutes watched",548+textWidthMinutes + 4,185,gothamBook,12),contentStream,light);

		String toWriteShareInViews = ytSource.viewsSharePercent + "";
		PDFText shareInViewsPDF = new PDFText(toWriteShareInViews + "%",548,160,gothamBold,20);
		print(shareInViewsPDF,contentStream,light);
		float textWidthSahareInViews = shareInViewsPDF.font.getStringWidth(shareInViewsPDF.text) / 1000.0f * shareInViewsPDF.fontSize;
		print(new PDFText("of total views",548+textWidthSahareInViews + 4,160,gothamBook,12),contentStream,light);
		contentStream.close();

		contentStream = new PDPageContentStream(doc,page60,true,true);
		int pos = 0;
		int pos2 = 0;
		print(new PDFText("YouTube rank "+"",560,320,gothamBook,14),contentStream,lightRed);
		//print(new PDFText("Thumbnail: "+"",240,320,gothamBook,14),contentStream,lightRed);
		print(new PDFText("Video "+"",320,320,gothamBook,14),contentStream,lightRed);
		print(new PDFText("Keyword ",80,320,gothamBook,14),contentStream,lightRed);
		for (Map.Entry<String, List<VideoRanking>> entry : videoRankingMap.entrySet())
		{	
			if(pos > 3){
				contentStream.close();
				contentStream = new PDPageContentStream(doc,page61,true,true);
				print(new PDFText("YouTube rank "+"",560,320,gothamBook,14),contentStream,lightRed);
				//print(new PDFText("Thumbnail: "+"",240,320,gothamBook,14),contentStream,lightRed);
				//print(new PDFText("Thumbnail: "+"",400,320,gothamBook,14),contentStream,lightRed);
				print(new PDFText("Keyword ",80,320	,gothamBook,14),contentStream,lightRed);
				print(new PDFText("Video "+"",320,320,gothamBook,14),contentStream,lightRed);
				float keywordWidth = gothamBook.getStringWidth("Keyword ") / 1000.0f * 14;
					
				if(entry.getValue().size() > 0){
					for(VideoRanking ranking : entry.getValue()){
						System.out.println("printing data  new");
						if(entry.getKey().startsWith(" "))
							print(new PDFText(transformTextWithLength(entry.getKey().substring(1)+"",20),80,280 - (pos2*50),gothamBold,14),contentStream,darkDark);
						else
							print(new PDFText(transformTextWithLength(entry.getKey()+"",20),80,280 - (pos2*50),gothamBold,14),contentStream,darkDark);
						//printThumbnailImageByPosition(ranking.thumbnailUrl+"" , 240, 280 - (pos2*50)	, 20 ,20 , contentStream,doc);
						print(new PDFText(transformTextWithLength(ranking.title +"",25),320,280 - (pos2*50),gothamBook,14),contentStream,darkDark);
						print(new PDFText(ranking.rankPosition+"" +"",560,280 - (pos2*50),gothamBook,14),contentStream,darkDark);
						pos++;
						pos2++;
				  	}
				} else {
					if(entry.getKey().startsWith(" "))
							print(new PDFText(transformTextWithLength(entry.getKey().substring(1)+"",20),80,280 - (pos*50),gothamBold,14),contentStream,darkDark);
						else
							print(new PDFText(transformTextWithLength(entry.getKey()+"",20),80,280 - (pos*50),gothamBold,14),contentStream,darkDark);
					//print(new PDFText("/",240,280-(pos2*50),gothamBook,14),contentStream,darkDark);
					print(new PDFText("N/A",320,280 - (pos2*50),gothamBook,14),contentStream,darkDark);
					print(new PDFText(">50" +"",560,280 - (pos2*50),gothamBook,14),contentStream,darkDark);
					pos++;
					pos2++;
				}
				
			} else if( pos > 7){
				System.out.println("POS is biger than 8");
				break;
			} else {

				//print(new PDFText(transformText(entry.getKey()+""),keywordWidth+100,290-(pos*50),gothamBold,14),contentStream,darkDark);
				if(entry.getValue().size() > 0 ){
 					for(VideoRanking ranking : entry.getValue()){
						System.out.println("printing data ");
						if(entry.getKey().startsWith(" "))
							print(new PDFText(transformTextWithLength(entry.getKey().substring(1)+"",20),80,280 - (pos*50),gothamBold,14),contentStream,darkDark);
						else
							print(new PDFText(transformTextWithLength(entry.getKey()+"",20),80,280 - (pos*50),gothamBold,14),contentStream,darkDark);
						//printThumbnailImageByPosition(ranking.thumbnailUrl+"" , 240, 280 - (pos*50)	, 20 ,20 , contentStream,doc);
						print(new PDFText(transformTextWithLength(ranking.title +"",25),320,280 - (pos*50),gothamBook,14),contentStream,darkDark);
						print(new PDFText(ranking.rankPosition+"" +"",560,280 - (pos*50),gothamBook,14),contentStream,darkDark);
						System.out.println("POS: " + pos);
						pos++;
					}
				} else {
					if(entry.getKey().startsWith(" "))
							print(new PDFText(transformTextWithLength(entry.getKey().substring(1)+"",20),80,280 - (pos*50),gothamBold,14),contentStream,darkDark);
						else
							print(new PDFText(transformTextWithLength(entry.getKey()+"",20),80,280 - (pos*50),gothamBold,14),contentStream,darkDark);
					//print(new PDFText("/",240,280-(pos*50),gothamBook,14),contentStream,darkDark);
					print(new PDFText("N/A",320,280 - (pos*50),gothamBook,14),contentStream,darkDark);
					print(new PDFText(">50" +"",560,280 - (pos*50),gothamBook,14),contentStream,darkDark);
					pos++;
				}
			}	
		}
		pos = 0;
		contentStream.close();

		contentStream = new PDPageContentStream(doc,page62,true,true);
		print(new PDFText("Channel",80,280,gothamBook,14),contentStream,lightRed);
		print(new PDFText("Subscribers",300,280,gothamBook,14),contentStream,lightRed);
		print(new PDFText("Views",450,280,gothamBook,14),contentStream,lightRed);
		print(new PDFText("Uploads",580,280,gothamBook,14),contentStream,lightRed);
		for(int i = 0; i < competitorChannelList.size() ; i++){
			if( i < 4){
				if(competitorChannelList.get(i).channelTitle == null){
					print(new PDFText("No channel title", 110,240 - (i*50),gothamBold,14),contentStream,darkDark);
				} else {
					print(new PDFText(transformTextWithLength(competitorChannelList.get(i).channelTitle,23) + "", 110,240 - (i*50),gothamBold,14),contentStream,darkDark);
				}
				printThumbnailImageByPosition(competitorChannelList.get(i).profileImageUrl ,80,240 - (i*50), 15 , 15 , contentStream , doc);
				//print(new PDFText(transformTextWithLength(competitorChannelList.get(i).channelTitle,23) + "", 110,240 - (i*50),gothamBold,14),contentStream,darkDark);
				print(new PDFText(competitorChannelList.get(i).views,450 , 240 - (i*50),gothamBook,14),contentStream,darkDark);
				print(new PDFText(competitorChannelList.get(i).subscribers,300,240 - (i*50),gothamBook,14),contentStream,darkDark);
				print(new PDFText(competitorChannelList.get(i).uploads+ "",580,240 - (i*50),gothamBook,14),contentStream,darkDark);
			}	
		}
		contentStream.close();

		contentStream = new PDPageContentStream(doc,page7,true,true);
		printTrailerImage(mp.get("homeImageUrl"),contentStream,doc,gothamBold);
		contentStream.close();

		contentStream = new PDPageContentStream(doc,page46,true,true);
		printImageByte(assWewbsite,contentStream,doc);
		contentStream.close();

		contentStream = new PDPageContentStream(doc,page63,true,true);
		printImageByteBST(bestTimeToUpload,contentStream,doc);
		contentStream.close();

		contentStream = new PDPageContentStream(doc,page36,true,true);
		printYouTubeSearchResult("https://www.youtube.com",mp.get("userChannelTitle"),contentStream,doc);
		contentStream.close();



		// contentStream = new PDPageContentStream(doc,page48,true,true);
		// print(new PDFText(mp.get("ANNOTATION_VIEWS"),660,240,gothamBold,22),contentStream,light);
		// contentStream.close();

	 //    contentStream = new PDPageContentStream(doc, first, 1true, true);
		// print(new PDFText(mp.get("name"), 435, 569, gothamBook, 20), contentStream, topName);
		// print(new PDFText(mp.get("name"), 282, 365, gothamBook, 24), contentStream, dark);
		// contentStream.close();

		// contentStream = new PDPageContentStream(doc, firstTh, true, true);
		// print(new PDFText(mp.get("name"), 435, 569, gothamBook, 20), contentStream, topName);
		// contentStream.close();

		// contentStream = new PDPageContentStream(doc, firstTwo, true, true);
		// print(new PDFText(mp.get("name"), 435, 569, gothamBook, 20), contentStream, topName);
		// contentStream.close();

		// contentStream = new PDPageContentStream(doc, fifth, true, true);
		// contentStream.close();

		// contentStream = new PDPageContentStream(doc, sixth, true, true);
		// print(new PDFText(mp.get("name"), 435, 569, gothamBook, 20), contentStream, topName);
		// contentStream.close();

		// contentStream = new PDPageContentStream(doc, second, true, true);
		// print(new PDFText(mp.get("name"), 435, 569, gothamBook, 20), contentStream, topName);
		
		// printFromReverse(new PDFText(mp.get("organic")+"%", dx+460, 415, 22), contentStream, light);
		// printFromReverse(new PDFText(mp.get("ADVERTISING")+"%", dx+760, 415, 22), contentStream, light);
		// printFromReverse(new PDFText("(last 90 days)", dx+1060, 450, 12), contentStream, light);
		// printFromReverse(new PDFText(mp.get("YT_SEARCH")+"%", dx+1060, 415, 22), contentStream, light);
		// printFromReverse(new PDFText(mp.get("underOptimized"), dx+460, 190, 22), contentStream, light);
		// printFromReverse(new PDFText("videos", dx+460, 170, 22), contentStream, light);
		// printFromReverse(new PDFText(mp.get("overOptimized"), dx+760, 190, 22), contentStream, light);
		// printFromReverse(new PDFText("videos", dx+760, 170, 22), contentStream, light);
		// printFromReverse(new PDFText(mp.get("engagement")+"%", dx+1060, 180, 22), contentStream, light);
		// contentStream.close();

		// contentStream = new PDPageContentStream(doc, third, true, true);
		// print(new PDFText(mp.get("name"), 435, 569, gothamBook, 20), contentStream, topName);
		// printFromReverse(new PDFText(mp.get("totalChanelViews"), dx+460, 425, 22), contentStream, light);
		// printFromReverse(new PDFText("views", dx+460, 405, 22), contentStream, light);

		
		// printFromReverse(new PDFText("(last 90 days)", dx+760, 450, 12), contentStream, light);
		// printFromReverse(new PDFText(mp.get("uniqueViews")+"%", dx+760, 415, 22), contentStream, light);

		
		// printFromReverse(new PDFText("(last 90 days)", dx+1060, 450, 12), contentStream, light);
		// printFromReverse(new PDFText(mp.get("RELATED_VIDEO")+"%", dx+1060, 415, 22), contentStream, light);
		// printFromReverse(new PDFText(mp.get("subscriberToViews")+"%", dx+460, 180, 22), contentStream, light);
		// printFromReverse(new PDFText(mp.get("minutesWatched"), dx+760, 190, 22), contentStream, light);
		// printFromReverse(new PDFText("mins", dx+760, 170, 22), contentStream, light);
		// printFromReverse(new PDFText(mp.get("viewDuration"), dx+1060, 190, 22), contentStream, light);
		// printFromReverse(new PDFText("sec", dx+1060, 170, 22), contentStream, light);
		// contentStream.close();

		// contentStream = new PDPageContentStream(doc, fourth, true, true);
		// print(new PDFText(mp.get("name"), 435, 569, gothamBook, 20), contentStream, topName);
		// printFromReverse(new PDFText(mp.get("totalPublicVideos"), dx+460, 425, 22), contentStream, light);
		// printFromReverse(new PDFText("views", dx+460, 405, 22), contentStream, light);
		// printFromReverse(new PDFText(mp.get("longTitle"), dx+760, 425, 22), contentStream, light);
		// printFromReverse(new PDFText("videos", dx+760, 405, 22), contentStream, light);
		// printFromReverse(new PDFText(mp.get("PLAYLIST")+"%", dx+1060, 415, 22), contentStream, light);
		// printFromReverse(new PDFText(mp.get("EXT_URL")+"%", dx+460, 180, 22), contentStream, light);

		

		// PDAnnotationLink txtLinkOne = new PDAnnotationLink();
		// PDActionURI actionOne = new PDActionURI();
		// actionOne.setURI("http://funnelbox.com/results/");
		// txtLinkOne.setAction(actionOne);
		// PDRectangle positionOne = new PDRectangle();
	 //    positionOne.setLowerLeftX(562);
	 //    positionOne.setLowerLeftY(122); 
	 //    positionOne.setUpperRightX(900); 
	 //    positionOne.setUpperRightY(167); 
	 //    txtLinkOne.setRectangle(positionOne);
	 //    sixth.getAnnotations().add(txtLinkOne);


	 //    PDAnnotationLink txtLinkTwo = new PDAnnotationLink();
		// PDActionURI actionTwo = new PDActionURI();
		// actionTwo.setURI("http://funnelbox.com/services/");
		// txtLinkTwo.setAction(actionTwo);
		// PDRectangle positionTwo = new PDRectangle();
	 //    positionTwo.setLowerLeftX(210);
	 //    positionTwo.setLowerLeftY(122); 
	 //    positionTwo.setUpperRightX(525); 
	 //    positionTwo.setUpperRightY(167); 
	 //    txtLinkTwo.setRectangle(positionTwo);
	 //    sixth.getAnnotations().add(txtLinkTwo);
		
		
		return doc;
	}



	public static String formatStringNumber(String number){
		int str = number.length();
		if(str >= 4){
			return number.substring(0,1) + "," + number.substring(1);
		} 
		else if(str >= 5){
			return number.substring(0,2) + "," + number.substring(2);
		}
		else if(str >= 6){
			return number.substring(0,3) + "," + number.substring(3);
		}
		else if(str >= 7){
			return number.substring(0,1) + "," + number.substring(1,4) + "," + number.substring(4);
		}
		else if(str >= 8){
			return number.substring(0,2) + "," + number.substring(2,5) + "," + number.substring(5);
		}
		else if(str >= 9){	
			return number.substring(0,3) + "," + number.substring(3,6) + ","  + number.substring(6);
		
		} else{
			return number;
		}

	}


	public static Dimension getScaledDimension(Dimension imgSize, Dimension boundary) {

	    int original_width = imgSize.width;
	    int original_height = imgSize.height;
	    int bound_width = boundary.width;
	    int bound_height = boundary.height;
	    int new_width = original_width;
	    int new_height = original_height;

	    // first check if we need to scale width
	    if (original_width > bound_width) {
	        //scale width to fit
	        new_width = bound_width;
	        //scale height to maintain aspect ratio
	        new_height = (new_width * original_height) / original_width;
	    }

	    // then check if we need to scale even with the new height
	    if (new_height > bound_height) {
	        //scale height to fit instead
	        new_height = bound_height;
	        //scale width to maintain aspect ratio
	        new_width = (new_height * original_width) / original_height;
	    }

	    return new Dimension(new_width, new_height);
	}



	public static int[] possibleWrapPoints(String text) {
	    String[] split = text.split("(?<=\\W)");
	    int[] ret = new int[split.length];
	    ret[0] = split[0].length();
	    for ( int i = 1 ; i < split.length ; i++ )
	        ret[i] = ret[i-1] + split[i].length();
	    return ret;
	}


	public static String transformText(String text){
		int charNum = text.length();
		if(charNum > 24){
			text = text.substring(0,22) + "...";
		}

		return text;
	}

	public static String transformTextWithLength(String text,int textLength){
		int charNum = text.length();
		if(charNum > textLength){
			text = text.substring(0,textLength - 3) + "...";
		}

		return text;
	}

	public static String formatNumberString(long n){
		return String.format("%,10d%n%n", n);
	}

	public static String formatNumberStringNumOfDigits(long n,int digits){
		return String.format("%," + digits + "d%n%n", n);
	}

	public static int countNumberOfLineBreak(PDFText ct , int textWidth){
		int line = 0;
		try{
			if(ct.text.length() > 0 && ct != null){
			float fontSize = ct.fontSize; // Or whatever font size you want.
			int paragraphWidth = textWidth;
			String text = ct.text;
			int start = 0;
			int end = 0;
			int height = 10;
			float widthOfOneCharacter = ct.font.getStringWidth(ct.text.substring(0,1)) / 1000 * ct.fontSize;

			//split string on characters 
			String chrs[] = new String[ct.text.length()];
			for(int i = 0; i < ct.text.length() ; i++){
					if(i == ct.text.length())
						chrs[i] = ct.text.substring(i);
					else
						chrs[i] = ct.text.substring(i,i+1);
			}

			//print character by character
			int length = 0;
			float currentWidth = 0;	
			String currentText = "";
			

			for(String ch : chrs){
				currentText += ch;

				if(currentWidth < paragraphWidth && length < (ct.text.length()-1)){
					currentWidth +=  widthOfOneCharacter;
				} else if(currentWidth < paragraphWidth && length == (ct.text.length()-1)){
					
				} else {
					line++;
					height += ct.font.getFontDescriptor().getFontBoundingBox().getHeight() / 1000 * ct.fontSize;
					currentWidth = 0;
					currentText = "";
				}

				length++;
			}
		}
		} catch(Exception ex){
			ex.printStackTrace();
		}
		
		return line;
	}

	public static List<String> parseKeywords(String keywords){
		String[] keys = keywords.split(" ");
		List<String> notConcatenateStrings = new ArrayList<String>();
		List<String> keysToConcatenate = new ArrayList<String>();
		List<String> toRet = new ArrayList<String>();
		for(String key : keys){
			if(key.startsWith("\"")){
				keysToConcatenate.add(key);
			} else if(key.endsWith("\"")){
				keysToConcatenate.add(key);
			} else {
				toRet.add(key);
			}
		}

		int div = 1;
		for(int i = 0; i < keysToConcatenate.size() ; i++){
			if(div % 2 == 0){
				toRet.add(keysToConcatenate.get(i-1) + " " +  keysToConcatenate.get(i));
			}
			div++;
		}
		div = 0;

		System.out.println("Keywords: " + toRet);

		return toRet;
	}


	public static void printBreakLineText(PDFText ct , PDPageContentStream contentStream , Color color,int pWidth) throws IOException{
		if(ct.text.length() > 0 && ct != null){
			float fontSize = ct.fontSize; // Or whatever font size you want.
			int paragraphWidth = pWidth;
			String text = ct.text;
			int start = 0;
			int end = 0;
			int height = 10;
			contentStream.setStrokingColor(color);
			contentStream.setNonStrokingColor(color);
			contentStream.setFont(ct.font,ct.fontSize);
			float widthOfOneCharacter = ct.font.getStringWidth(text.substring(0,1)) / 1000 * ct.fontSize;

			//split string on characters 
			String chrs[] = new String[ct.text.length()];
			for(int i = 0; i < ct.text.length() ; i++){
					if(i == ct.text.length())
						chrs[i] = ct.text.substring(i);
					else
						chrs[i] = ct.text.substring(i,i+1);
			}

			//print character by character
			int length = 0;
			float currentWidth = 0;	
			String currentText = "";

			for(String ch : chrs){
				currentText += ch;

				if(currentWidth < paragraphWidth && length < (ct.text.length()-1)){
					currentWidth +=  widthOfOneCharacter;
				} else if(currentWidth < paragraphWidth && length == (ct.text.length()-1)){
					if(currentText.startsWith("þÿ")){
						currentText = currentText.substring(0,2);
					}
					contentStream.beginText();
					contentStream.moveTextPositionByAmount(ct.x ,ct.y - height);
					contentStream.drawString(currentText);
					contentStream.endText();
				} else {
					contentStream.beginText();
					contentStream.moveTextPositionByAmount(ct.x ,ct.y - height);
					contentStream.drawString(currentText);
					contentStream.endText();
					height += ct.font.getFontDescriptor().getFontBoundingBox().getHeight() / 1000 * ct.fontSize;
					currentWidth = 0;
					currentText = "";
				}

				length++;
			}
		}
		 // Or whatever font you want.	
	}


	public static void printBreakLineTextWordWrap(List<String> textList, PDPageContentStream contentStream ,int fontSize, PDFont font ,Color color,int pWidth) throws IOException{
		if(textList.size() > 0 && textList != null){
			int paragraphWidth = pWidth;
			int start = 0;
			int end = 0;
			int height = 10;
			contentStream.setStrokingColor(color);
			contentStream.setNonStrokingColor(color);
			contentStream.setFont(font,fontSize);
			float widthOfOneCharacter = font.getStringWidth(textList.get(0).substring(0,1)) / 1000 * fontSize;


			float currentTextWidth = 0;
			String currentText = "";

			for(int i = 0 ; i < textList.size() ; i++){
				
				if(currentTextWidth <= pWidth){

					currentText += textList.get(i) + ", "; 
					System.out.println("currentText: " + currentText);
					if(i == (textList.size() - 1)){
						if((pWidth - currentTextWidth) > 15){

							//currentText += textList.get(i);
							currentText = currentText.substring(0,currentText.length()-2);
							System.out.println("text to print if 1: " + currentText);
							PDFText finalText = new PDFText(currentText,80,280-height,font,fontSize);
							contentStream.beginText();
							contentStream.moveTextPositionByAmount(finalText.x,finalText.y);
							contentStream.drawString(finalText.text);
							contentStream.endText();
						} else {

							PDFText finalText = new PDFText(currentText,80,280-height,font,fontSize);
							contentStream.beginText();
							contentStream.moveTextPositionByAmount(finalText.x,finalText.y);
							contentStream.drawString(finalText.text);
							contentStream.endText();
							height += font.getFontDescriptor().getFontBoundingBox().getHeight() / 1000 * fontSize;
							PDFText newText = new PDFText(textList.get(i),80,280-height,font,fontSize);
							System.out.println("Text to print else : " + newText.text + "new LIne " + finalText.text);
							contentStream.beginText();
							contentStream.moveTextPositionByAmount(newText.x,newText.y);
							contentStream.drawString(newText.text);
							contentStream.endText();
						}
					}

				} else if(i == (textList.size() - 1)){
					if(currentTextWidth <= pWidth && (pWidth - currentTextWidth) > 15){

						currentText += textList.get(i);
						System.out.println("text to print if: " + currentText);
						PDFText finalText = new PDFText(currentText,80,280-height,font,fontSize);
						contentStream.beginText();
						contentStream.moveTextPositionByAmount(finalText.x,finalText.y);
						contentStream.drawString(finalText.text);
						contentStream.endText();
					} else {

						PDFText finalText = new PDFText(currentText,80,280-height,font,fontSize);
						contentStream.beginText();
						contentStream.moveTextPositionByAmount(finalText.x,finalText.y);
						contentStream.drawString(finalText.text);
						contentStream.endText();
						height += font.getFontDescriptor().getFontBoundingBox().getHeight() / 1000 * fontSize;
						PDFText newText = new PDFText(textList.get(i),80,280-height,font,fontSize);
						System.out.println("Text to print else : " + newText.text + "new LIne " + finalText.text);
						contentStream.beginText();
						contentStream.moveTextPositionByAmount(newText.x,newText.y);
						contentStream.drawString(newText.text);
						contentStream.endText();
					}

				}else {

					System.out.println("currentText To Print: " + currentText);
					PDFText ct2 = new PDFText(currentText ,80,280-height,fontSize);
					contentStream.beginText();
					contentStream.moveTextPositionByAmount(ct2.x,ct2.y);
					contentStream.drawString(ct2.text);
					contentStream.endText();
					currentText = textList.get(i) + ", ";
					currentTextWidth = 0;
					height += ct2.font.getFontDescriptor().getFontBoundingBox().getHeight() / 1000 * fontSize;
				}
				currentTextWidth += font.getStringWidth(textList.get(i)) / 1000 * fontSize;
			}
			
		}
		 // Or whatever font you want.	
	}



	public static void printBreakLineTextWithLines(PDFText ct , PDPageContentStream contentStream , Color color,int pWidth,int numOfLines) throws IOException{
		if(ct.text.length() > 0 && ct != null){
			float fontSize = ct.fontSize; // Or whatever font size you want.
			int paragraphWidth = pWidth;
			String text = ct.text;
			int start = 0;
			int end = 0;
			int height = 10;
			int lines = 0;
			contentStream.setStrokingColor(color);
			contentStream.setNonStrokingColor(color);
			contentStream.setFont(ct.font,ct.fontSize);
			float widthOfOneCharacter = ct.font.getStringWidth(text.substring(0,1)) / 1000 * ct.fontSize;

			//split string on characters 
			String chrs[] = new String[ct.text.length()];
			for(int i = 0; i < ct.text.length() ; i++){
					if(i == ct.text.length())
						chrs[i] = ct.text.substring(i);
					else
						chrs[i] = ct.text.substring(i,i+1);
			}

			//print character by character
			int length = 0;
			float currentWidth = 0;	
			String currentText = "";

			for(String ch : chrs){
				currentText += ch;

				if(currentWidth < paragraphWidth && length < (ct.text.length()-1)){
					currentWidth +=  widthOfOneCharacter;
				} else if(currentWidth < paragraphWidth && length == (ct.text.length()-1)){
					if(currentText.startsWith("þÿ")){
						currentText = currentText.substring(0,2);
					}
					contentStream.beginText();
					contentStream.moveTextPositionByAmount(ct.x ,ct.y - height);
					contentStream.drawString(currentText);
					contentStream.endText();
				} else {
					if(lines < numOfLines){
						contentStream.beginText();
						contentStream.moveTextPositionByAmount(ct.x ,ct.y - height);
						contentStream.drawString(currentText);
						contentStream.endText();
						height += ct.font.getFontDescriptor().getFontBoundingBox().getHeight() / 1000 * ct.fontSize;
					}else {
						contentStream.beginText();
						contentStream.moveTextPositionByAmount(ct.x ,ct.y - height);
						contentStream.drawString("...");
						contentStream.endText();
						break;
					}
					
					currentWidth = 0;
					currentText = "";
					lines++;
				}

				length++;
			}
		}
		 // Or whatever font you want.	
	}

	public void printFromReverse(PDFText ct, PDPageContentStream contentStream, Color color) throws IOException {
		contentStream.setStrokingColor(color);
		contentStream.setNonStrokingColor(color);
		printFromReverse(ct, contentStream);
	}


	public static void printCentered(PDFText ct, PDPageContentStream contentStream, Color color) throws IOException {
		contentStream.setStrokingColor(color);
		contentStream.setNonStrokingColor(color);
		printCentered(ct, contentStream);
	}
	public static void printCentered(PDFText ct, PDPageContentStream contentStream) throws IOException {
        if (ct!=null && ct.text!=null) {
            contentStream.beginText();
            float textWidth = (ct.font.getStringWidth(ct.text) / 1000.0f) * ct.fontSize;
            contentStream.moveTextPositionByAmount(ct.x-textWidth/2, ct.y);
            contentStream.setFont(ct.font, ct.fontSize);
            contentStream.drawString(ct.text);
            contentStream.endText();
        }
    }

	public static void printFromReverse(PDFText ct, PDPageContentStream contentStream) throws IOException {
		if (ct!=null) {
			contentStream.beginText();
			float textWidth = (ct.font.getStringWidth(ct.text) / 1000.0f) * ct.fontSize;
	        contentStream.moveTextPositionByAmount(ct.x-textWidth, ct.y);
	        contentStream.setFont(ct.font, ct.fontSize);
	        contentStream.drawString(ct.text);
			contentStream.endText();
		}
	}
	
	public void print(PDFText ct, PDPageContentStream contentStream, Color color) throws IOException {
		contentStream.setStrokingColor(color);
		contentStream.setNonStrokingColor(color);
		print(ct, contentStream);
	}
	
	public void print(PDFText ct, PDPageContentStream contentStream) throws IOException {
		if (ct!=null) {
			contentStream.beginText();
	        contentStream.moveTextPositionByAmount(ct.x, ct.y);
	        contentStream.setFont(ct.font, ct.fontSize);
	        contentStream.drawString(ct.text);
			contentStream.endText();
		}
	}

	public void printImage(String bannerImageUrl , PDPageContentStream contentStream , PDDocument doc){
		try{
			System.out.println("banner url: " + bannerImageUrl);
			PDXObjectImage ximage = null;
			BufferedImage awtImage = ImageIO.read(new java.net.URL(bannerImageUrl));
			Dimension scaledDim = getScaledDimension(new Dimension(awtImage.getWidth() , awtImage.getHeight()),new Dimension(400,100));
			ximage = new PDPixelMap(doc, awtImage);
			contentStream.drawXObject(ximage, 80, 195, scaledDim.width, scaledDim.height);
		} catch(Exception ex){
			ex.printStackTrace();
		}
	}

	public void printThumbnailImage(String imageUrl , PDPageContentStream contentStream , PDDocument doc){
		try{
			System.out.println("ImageUrl : " + imageUrl);
			PDXObjectImage ximage = null;
			BufferedImage awtImage = ImageIO.read(new java.net.URL(imageUrl));
			Dimension scaledDim = getScaledDimension(new Dimension(awtImage.getWidth() , awtImage.getHeight()),new Dimension(230,200));
			ximage = new PDPixelMap(doc, awtImage);
			contentStream.drawXObject(ximage, 80, 120, scaledDim.width, scaledDim.height);
		} catch(Exception ex){
			ex.printStackTrace();
		}
	}

	public void printThumbnailImageByPosition(String imageUrl , int x, int y, 
											  int width , int height , PDPageContentStream contentStream,PDDocument doc){

		try{
			PDXObjectImage ximage = null;
			BufferedImage awtImage = ImageIO.read(new java.net.URL(imageUrl));
			Dimension scaledDim = getScaledDimension(new Dimension(awtImage.getWidth() , awtImage.getHeight()),new Dimension(width,height));
			ximage = new PDPixelMap(doc, awtImage);
			contentStream.drawXObject(ximage, x, y, scaledDim.width, scaledDim.height);
		} catch(Exception ex){
			ex.printStackTrace();
		}
	}

	public void printByteImage(String imageUrl , PDPageContentStream contentStream , PDDocument doc){
		System.out.println("Uso samasdasdasd!!!!!!!!");
		try{
			DesiredCapabilities dcaps = new DesiredCapabilities();
	        dcaps.setCapability("takesScreenshot", true);
	       // dcaps.setCapability(PhantomJSDriverService.PHANTOMJS_EXECUTABLE_PATH_PROPERTY, "E:\\Eclipse Programs\\SeleniumProject\\phantomjs-2.1.1-windows\\bin\\phantomjs.exe");
	        System.out.println("Image Url: " + imageUrl);
	       PhantomJSDriver driver = new PhantomJSDriver(dcaps);
	        driver.get(imageUrl);

	        try {
				Thread.sleep(4000);
			} catch (InterruptedException e1) {
				e1.printStackTrace();
			}

	        System.out.println("Taking screenshot now");
	        byte[] srcFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
	        System.out.println("File:" + srcFile);
	        driver.quit();
	        System.out.println("Driver closed");

			PDXObjectImage ximage = null;
			InputStream in = new ByteArrayInputStream(srcFile);
			BufferedImage awtImage = ImageIO.read(in);
			awtImage = awtImage.getSubimage(0,0,awtImage.getWidth(),awtImage.getHeight() - 320);
			Dimension scaledDim =getScaledDimension(new Dimension(awtImage.getWidth() , awtImage.getHeight()),new Dimension(400,200));
			ximage = new PDPixelMap(doc, awtImage);
			
			contentStream.drawXObject(ximage, 80, 142, scaledDim.width, scaledDim.height);
 
       		contentStream.closeAndStroke();
	        
	        System.out.println("Done");
		} catch(Exception ex){
			ex.printStackTrace();
			return;	
		}
	}

	public static void printDescImage(String channelId,PDPageContentStream contentStream, PDDocument doc){
		try{

			DesiredCapabilities dcaps = new DesiredCapabilities();
	        dcaps.setCapability("takesScreenshot", true);
	        System.out.println("Image Url: " + "https://www.youtube.com/channel/" + channelId);
	       	PhantomJSDriver driver = new PhantomJSDriver(dcaps);
	        driver.get("https://www.youtube.com/channel/" + channelId);

	         try {
				Thread.sleep(4000);
			} catch (InterruptedException e1) {
				e1.printStackTrace();
			}

			WebDriverWait wait = new WebDriverWait(driver, 10);
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("channel-navigation-menu")));
			WebElement navigationMenu = driver.findElement(By.id("channel-navigation-menu"));
			List<WebElement> navigationMenuEls = navigationMenu.findElements(By.tagName("li"));

			if(navigationMenuEls != null && navigationMenuEls.size() > 0){
				WebElement about = navigationMenuEls.get(navigationMenuEls.size() - 2).findElement(By.tagName("a"));
				about.click();
				System.out.println("About is clicked");

				try{
					Thread.sleep(3000);
				} catch(Exception ex3){
					ex3.printStackTrace();
				}

				//wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("about-description")));
				WebElement channelDesc = driver.findElement(By.className("about-description"));
				WebElement showMoreDesc = null;

				//Get entire page screenshot
				byte[] screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
				InputStream in = new ByteArrayInputStream(screenshot);
				BufferedImage  fullImg = ImageIO.read(in);
				//Get the location of element on the page
				Point point = channelDesc.getLocation();
				//Get width and height of the element
				int eleWidth = channelDesc.getSize().getWidth() + 50;
				int eleHeight = channelDesc.getSize().getHeight()+ 150;
				//Crop the entire page screenshot to get only element screenshot
				BufferedImage eleScreenshot= fullImg.getSubimage(point.getX(), point.getY(), eleWidth,
				    eleHeight);
				PDXObjectImage ximage = null;
				Dimension scaledDim = getScaledDimension(new Dimension(eleScreenshot.getWidth() ,  eleScreenshot.getHeight()),new Dimension(400,200));
				ximage = new PDPixelMap(doc, eleScreenshot);
				contentStream.drawXObject(ximage, 60, 142, scaledDim.width, scaledDim.height);
				
			}
		} catch(Exception ex){	
			ex.printStackTrace();
		}
	}

	public void printCustomImage(String imageUrl, PDPageContentStream contentStream , PDDocument doc){
		try{

			DesiredCapabilities dcaps = new DesiredCapabilities();
	        dcaps.setCapability("takesScreenshot", true);
	        // System.out.println("Image Url: " + "https://www.youtube.com/channel/" + channelId);
	       	PhantomJSDriver driver = new PhantomJSDriver(dcaps);
	        driver.get("https://www.youtube.com/channel/" + imageUrl);

	         try {
				Thread.sleep(4000);
			} catch (InterruptedException e1) {
				e1.printStackTrace();
			}

			WebDriverWait wait = new WebDriverWait(driver, 10);
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("browse-items-primary")));
			WebElement navigationMenu = driver.findElement(By.id("browse-items-primary"));
			List<WebElement> navigationMenuEls = navigationMenu.findElements(By.tagName("li"));

			if(navigationMenuEls != null && navigationMenuEls.size() > 0){
				

				WebElement channelDesc = navigationMenuEls.get(1);
				WebElement aboveVideo = navigationMenuEls.get(0);

				WebElement artBannerContainer = driver.findElement(By.className("branded-page-v2-top-row"));

				//Get entire page screenshot
				byte[] screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
				InputStream in = new ByteArrayInputStream(screenshot);
				BufferedImage  fullImg = ImageIO.read(in);
				//Get the location of element on the page
				Point point = channelDesc.getLocation();
				//Get width and height of the element
				int eleWidth = channelDesc.getSize().getWidth();
				int eleHeight = channelDesc.getSize().getHeight()+ aboveVideo.getSize().getHeight() + artBannerContainer.getSize().getHeight();
				//Crop the entire page screenshot to get only element screenshot
				BufferedImage eleScreenshot= fullImg.getSubimage(point.getX(), point.getY(), eleWidth,
				    eleHeight);
				PDXObjectImage ximage = null;
				Dimension scaledDim = getScaledDimension(new Dimension(eleScreenshot.getWidth() ,  eleScreenshot.getHeight()),new Dimension(400,200));
				ximage = new PDPixelMap(doc, eleScreenshot);
				contentStream.drawXObject(ximage, 60, 142, scaledDim.width, scaledDim.height);
				
			}
		} catch(Exception ex){	
			ex.printStackTrace();
		}
	}

	public void printImageByte(byte[] image , PDPageContentStream contentStream , PDDocument doc){
		try{
			PDXObjectImage ximage = null;
			InputStream in = new ByteArrayInputStream(image);
			BufferedImage awtImage = ImageIO.read(in);
			//awtImage = awtImage.getSubimage(0,100,awtImage.getWidth(),awtImage.getHeight() - 320);
			Dimension scaledDim = getScaledDimension(new Dimension(awtImage.getWidth() , awtImage.getHeight()),new Dimension(320,200));
			ximage = new PDPixelMap(doc, awtImage);
			contentStream.drawXObject(ximage, 80, 142, scaledDim.width, scaledDim.height);
		} catch(Exception ex){
			ex.printStackTrace();
		}	
	}


	public void printImageByteBST(byte[] image , PDPageContentStream contentStream , PDDocument doc){
		try{
			PDXObjectImage ximage = null;
			InputStream in = new ByteArrayInputStream(image);
			BufferedImage awtImage = ImageIO.read(in);
			//awtImage = awtImage.getSubimage(0,100,awtImage.getWidth(),awtImage.getHeight() - 320);
			Dimension scaledDim = getScaledDimension(new Dimension(awtImage.getWidth() , awtImage.getHeight()),new Dimension(450,250));
			ximage = new PDPixelMap(doc, awtImage);
			contentStream.drawXObject(ximage, 80, 105, scaledDim.width, scaledDim.height);
		} catch(Exception ex){
			ex.printStackTrace();
		}	
	}

	public void printImageByteYtSearch(byte[] image , PDPageContentStream contentStream , PDDocument doc){
		try{
			PDXObjectImage ximage = null;
			InputStream in = new ByteArrayInputStream(image);
			BufferedImage awtImage = ImageIO.read(in);
			//awtImage = awtImage.getSubimage(0,100,awtImage.getWidth(),awtImage.getHeight() - 320);
			Dimension scaledDim = getScaledDimension(new Dimension(awtImage.getWidth() , awtImage.getHeight()),new Dimension(400,250));
			ximage = new PDPixelMap(doc, awtImage);
			contentStream.drawXObject(ximage, 80, 142, scaledDim.width, scaledDim.height);
		} catch(Exception ex){
			ex.printStackTrace();
		}	
	}

	public void printAboutImage(String imageUrl , PDPageContentStream contentStream , PDDocument doc){
		try{
			System.out.println("ImageUrl: " + imageUrl);
			DesiredCapabilities dcaps = new DesiredCapabilities();
	        dcaps.setCapability("takesScreenshot", true);
	       // dcaps.setCapability(PhantomJSDriverService.PHANTOMJS_EXECUTABLE_PATH_PROPERTY, "E:\\Eclipse Programs\\SeleniumProject\\phantomjs-2.1.1-windows\\bin\\phantomjs.exe");
	        System.out.println("Image Url: " + imageUrl);
	        PhantomJSDriver driver = new PhantomJSDriver(dcaps);
	        driver.get(imageUrl);

	        try {
				Thread.sleep(4000);
			} catch (InterruptedException e1) {
				e1.printStackTrace();
			}
			WebDriverWait wait = new WebDriverWait(driver, 10);
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("channel-navigation-menu")));
			WebElement navigationMenu = driver.findElement(By.id("channel-navigation-menu"));
			List<WebElement> navigationMenuEls = navigationMenu.findElements(By.tagName("li"));
			if(navigationMenuEls != null  && navigationMenuEls.size() > 0){
				WebElement about = navigationMenuEls.get(navigationMenuEls.size() - 2).findElement(By.tagName("a"));
				about.click();
				try {
				Thread.sleep(4000);
				} catch (InterruptedException e1) {
					e1.printStackTrace();
				}

		        System.out.println("Taking screenshot now");
		        byte[] srcFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
		        System.out.println("File:" + srcFile);
		        driver.quit();

				PDXObjectImage ximage = null;
				InputStream in = new ByteArrayInputStream(srcFile);
				BufferedImage awtImage = ImageIO.read(in);
				awtImage = awtImage.getSubimage(0,100,awtImage.getWidth(),awtImage.getHeight() - 320);
				Dimension scaledDim = getScaledDimension(new Dimension(awtImage.getWidth() , awtImage.getHeight()),new Dimension(400,200));
				ximage = new PDPixelMap(doc, awtImage);
				contentStream.drawXObject(ximage, 80, 140, scaledDim.width, scaledDim.height);
	       		contentStream.closeAndStroke();
			} else {
				System.out.println("image havent been taken");
			}
			
			
	        
	        System.out.println("Done");
		} catch(Exception ex){
			ex.printStackTrace();
			return;
		}
	}

	public void printTitlingImage(String imageUrl, PDPageContentStream contentStream , PDDocument doc){
		try{
			DesiredCapabilities dcaps = new DesiredCapabilities();
	        dcaps.setCapability("takesScreenshot", true);
	       // dcaps.setCapability(PhantomJSDriverService.PHANTOMJS_EXECUTABLE_PATH_PROPERTY, "E:\\Eclipse Programs\\SeleniumProject\\phantomjs-2.1.1-windows\\bin\\phantomjs.exe");

	        PhantomJSDriver driver = new PhantomJSDriver(dcaps);
	        driver.get(imageUrl);

	        try {
				Thread.sleep(4000);
			} catch (InterruptedException e1) {
				e1.printStackTrace();
			}
			WebDriverWait wait = new WebDriverWait(driver, 10);
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("channel-navigation-menu")));
			WebElement navigationMenu = driver.findElement(By.id("channel-navigation-menu"));

			List<WebElement> navigationMenuEls = navigationMenu.findElements(By.tagName("li"));
			if(navigationMenuEls != null &&  navigationMenuEls.size() > 2){
				System.out.println("Image Url: " + imageUrl);
				WebElement videos = navigationMenuEls.get(1).findElement(By.tagName("a"));
				videos.click();
				System.out.println("Video is clicked");
				try {
				Thread.sleep(4000);
				} catch (InterruptedException e1) {
					e1.printStackTrace();
				}

				WebElement videosGrid = driver.findElement(By.id("channels-browse-content-grid"));

		        System.out.println("Taking screenshot now");
		        byte[] srcFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
		        System.out.println("Taking titling image" );

		        BufferedImage  fullImg = ImageIO.read(in);
				//Get the location of element on the page
				Point point = channelTrailerElement.getLocation();
				//Get width and height of the element
				int eleWidth = videosGrid.getSize().getWidth() + 60;
				int eleHeight = videosGrid.getSize().getHeight() + 150;
				//Crop the entire page screenshot to get only element screenshot
				BufferedImage eleScreenshot= fullImg.getSubimage(point.getX(), point.getY(), eleWidth,
				    eleHeight);
				PDXObjectImage ximage = null;
				Dimension scaledDim = getScaledDimension(new Dimension(eleScreenshot.getWidth() , eleScreenshot.getHeight()),new Dimension(420,200));
				ximage = new PDPixelMap(doc, eleScreenshot);
				contentStream.drawXObject(ximage, 80, 142, scaledDim.width, scaledDim.height);


		        driver.quit();
		        System.out.println("Done");
			} else {
				System.out.println("Titling image havent prineted out");
			}
														
		} catch(Exception ex){
			ex.printStackTrace();
			return;
		}
	}

	 public void printTrailerImage(String channelUrl,PDPageContentStream contentStream, PDDocument doc,PDFont font){
    	try{
    		DesiredCapabilities dcaps = new DesiredCapabilities();
	        dcaps.setCapability("takesScreenshot", true);
	       // dcaps.setCapability(PhantomJSDriverService.PHANTOMJS_EXECUTABLE_PATH_PROPERTY, "E:\\Eclipse Programs\\SeleniumProject\\phantomjs-2.1.1-windows\\bin\\phantomjs.exe");
	        System.out.println("PrintIMage Trailer channle url: " + channelUrl);
	        PhantomJSDriver driver = new PhantomJSDriver(dcaps);
	        driver.get(channelUrl);

	        try {
				Thread.sleep(6000);
			} catch (InterruptedException e1) {
				e1.printStackTrace();
			}
			WebDriverWait wait = new WebDriverWait(driver, 10);
	
				//wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/html/body/div[3]/div[4]/div/div[5]/div/div[1]")));
				WebElement channelTrailerElement = driver.findElement(By.className("video-player-view-component"));

    			//Get entire page screenshot
				byte[] screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
				InputStream in = new ByteArrayInputStream(screenshot);
				
				BufferedImage  fullImg = ImageIO.read(in);
				//Get the location of element on the page
				Point point = channelTrailerElement.getLocation();
				//Get width and height of the element
				int eleWidth = channelTrailerElement.getSize().getWidth() + 60;
				int eleHeight = channelTrailerElement.getSize().getHeight();
				//Crop the entire page screenshot to get only element screenshot
				BufferedImage eleScreenshot= fullImg.getSubimage(point.getX(), point.getY(), eleWidth,
				    eleHeight);
				PDXObjectImage ximage = null;
				Dimension scaledDim = getScaledDimension(new Dimension(eleScreenshot.getWidth() , eleScreenshot.getHeight()),new Dimension(420,200));
				ximage = new PDPixelMap(doc, eleScreenshot);
				contentStream.drawXObject(ximage, 80, 142, scaledDim.width, scaledDim.height);

	       		driver.quit();
    		
    	} catch (Exception ex){
    		try{
    			print(new PDFText("No channel trailer",80,280,font,22),contentStream,darkDark);
    		} catch(Exception ex2){
    			ex2.printStackTrace();
    		}
    		System.out.println("NO Channel Trailer......");
    		ex.printStackTrace();
    	}
    }


    public void printYouTubeSearchResult(String url,String searchTerm,PDPageContentStream contentStream, PDDocument doc){
    	try{	
    		DesiredCapabilities dcaps = new DesiredCapabilities();
	        dcaps.setCapability("takesScreenshot", true);
	       // dcaps.setCapability(PhantomJSDriverService.PHANTOMJS_EXECUTABLE_PATH_PROPERTY, "E:\\Eclipse Programs\\SeleniumProject\\phantomjs-2.1.1-windows\\bin\\phantomjs.exe");
	        System.out.println("Youtube Stearch url: " + url);
	        System.out.println("SearcTerm: " + searchTerm);
	        PhantomJSDriver driver = new PhantomJSDriver(dcaps);
	        driver.get(url);

	        try {
				Thread.sleep(4000);
			} catch (InterruptedException e1) {
				e1.printStackTrace();
			}
			WebDriverWait wait = new WebDriverWait(driver, 10);
			//wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/html/body/div[2]/div[2]/div[2]/div/div[3]/form/div/input")));

			wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("masthead-search-term")));
			WebElement videos = driver.findElement(By.id("masthead-search-term"));
														
			videos.sendKeys(searchTerm);

			wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("search-btn")));
			WebElement searchBtn = driver.findElement(By.id("search-btn"));

			searchBtn.click();

			try {
				Thread.sleep(4000);
			} catch (InterruptedException e1) {
				e1.printStackTrace();
			}

			org.openqa.selenium.Dimension dim = new org.openqa.selenium.Dimension(768, 1024);
			driver.manage().window().setSize(dim);

	        System.out.println("Taking screenshot now");
	        byte[] srcFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
	        System.out.println("File:" + srcFile);
	        driver.quit();

			PDXObjectImage ximage = null;
			InputStream in = new ByteArrayInputStream(srcFile);
			BufferedImage awtImage = ImageIO.read(in);
			if(awtImage.getHeight() > 700){
				awtImage = awtImage.getSubimage(0,0,awtImage.getWidth(),awtImage.getHeight()-(awtImage.getHeight()-700));
			}else {
				awtImage = awtImage.getSubimage(0,0,awtImage.getWidth(),awtImage.getHeight()-400);
			}
			Dimension scaledDim = getScaledDimension(new Dimension(awtImage.getWidth() , awtImage.getHeight()),new Dimension(400,200));
			ximage = new PDPixelMap(doc, awtImage);
			contentStream.drawXObject(ximage, 80, 140, scaledDim.width, scaledDim.height);
       		contentStream.closeAndStroke();
	        
	        System.out.println("Done");
    	}catch(Exception ex){
    		ex.printStackTrace();
    	}
    }
}