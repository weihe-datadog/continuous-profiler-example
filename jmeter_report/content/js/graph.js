/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 74.0, "minX": 0.0, "maxY": 800.0, "series": [{"data": [[0.0, 74.0], [0.1, 74.0], [0.2, 74.0], [0.3, 74.0], [0.4, 74.0], [0.5, 74.0], [0.6, 74.0], [0.7, 74.0], [0.8, 74.0], [0.9, 74.0], [1.0, 75.0], [1.1, 75.0], [1.2, 75.0], [1.3, 75.0], [1.4, 75.0], [1.5, 75.0], [1.6, 75.0], [1.7, 75.0], [1.8, 75.0], [1.9, 75.0], [2.0, 99.0], [2.1, 99.0], [2.2, 99.0], [2.3, 99.0], [2.4, 99.0], [2.5, 99.0], [2.6, 99.0], [2.7, 99.0], [2.8, 99.0], [2.9, 99.0], [3.0, 106.0], [3.1, 106.0], [3.2, 106.0], [3.3, 106.0], [3.4, 106.0], [3.5, 106.0], [3.6, 106.0], [3.7, 106.0], [3.8, 106.0], [3.9, 106.0], [4.0, 107.0], [4.1, 107.0], [4.2, 107.0], [4.3, 107.0], [4.4, 107.0], [4.5, 107.0], [4.6, 107.0], [4.7, 107.0], [4.8, 107.0], [4.9, 107.0], [5.0, 108.0], [5.1, 108.0], [5.2, 108.0], [5.3, 108.0], [5.4, 108.0], [5.5, 108.0], [5.6, 108.0], [5.7, 108.0], [5.8, 108.0], [5.9, 108.0], [6.0, 109.0], [6.1, 109.0], [6.2, 109.0], [6.3, 109.0], [6.4, 109.0], [6.5, 109.0], [6.6, 109.0], [6.7, 109.0], [6.8, 109.0], [6.9, 109.0], [7.0, 109.0], [7.1, 109.0], [7.2, 109.0], [7.3, 109.0], [7.4, 109.0], [7.5, 109.0], [7.6, 109.0], [7.7, 109.0], [7.8, 109.0], [7.9, 109.0], [8.0, 112.0], [8.1, 112.0], [8.2, 112.0], [8.3, 112.0], [8.4, 112.0], [8.5, 112.0], [8.6, 112.0], [8.7, 112.0], [8.8, 112.0], [8.9, 112.0], [9.0, 112.0], [9.1, 112.0], [9.2, 112.0], [9.3, 112.0], [9.4, 112.0], [9.5, 112.0], [9.6, 112.0], [9.7, 112.0], [9.8, 112.0], [9.9, 112.0], [10.0, 113.0], [10.1, 113.0], [10.2, 113.0], [10.3, 113.0], [10.4, 113.0], [10.5, 113.0], [10.6, 113.0], [10.7, 113.0], [10.8, 113.0], [10.9, 113.0], [11.0, 115.0], [11.1, 115.0], [11.2, 115.0], [11.3, 115.0], [11.4, 115.0], [11.5, 115.0], [11.6, 115.0], [11.7, 115.0], [11.8, 115.0], [11.9, 115.0], [12.0, 117.0], [12.1, 117.0], [12.2, 117.0], [12.3, 117.0], [12.4, 117.0], [12.5, 117.0], [12.6, 117.0], [12.7, 117.0], [12.8, 117.0], [12.9, 117.0], [13.0, 118.0], [13.1, 118.0], [13.2, 118.0], [13.3, 118.0], [13.4, 118.0], [13.5, 118.0], [13.6, 118.0], [13.7, 118.0], [13.8, 118.0], [13.9, 118.0], [14.0, 119.0], [14.1, 119.0], [14.2, 119.0], [14.3, 119.0], [14.4, 119.0], [14.5, 119.0], [14.6, 119.0], [14.7, 119.0], [14.8, 119.0], [14.9, 119.0], [15.0, 120.0], [15.1, 120.0], [15.2, 120.0], [15.3, 120.0], [15.4, 120.0], [15.5, 120.0], [15.6, 120.0], [15.7, 120.0], [15.8, 120.0], [15.9, 120.0], [16.0, 121.0], [16.1, 121.0], [16.2, 121.0], [16.3, 121.0], [16.4, 121.0], [16.5, 121.0], [16.6, 121.0], [16.7, 121.0], [16.8, 121.0], [16.9, 121.0], [17.0, 126.0], [17.1, 126.0], [17.2, 126.0], [17.3, 126.0], [17.4, 126.0], [17.5, 126.0], [17.6, 126.0], [17.7, 126.0], [17.8, 126.0], [17.9, 126.0], [18.0, 129.0], [18.1, 129.0], [18.2, 129.0], [18.3, 129.0], [18.4, 129.0], [18.5, 129.0], [18.6, 129.0], [18.7, 129.0], [18.8, 129.0], [18.9, 129.0], [19.0, 129.0], [19.1, 129.0], [19.2, 129.0], [19.3, 129.0], [19.4, 129.0], [19.5, 129.0], [19.6, 129.0], [19.7, 129.0], [19.8, 129.0], [19.9, 129.0], [20.0, 130.0], [20.1, 130.0], [20.2, 130.0], [20.3, 130.0], [20.4, 130.0], [20.5, 130.0], [20.6, 130.0], [20.7, 130.0], [20.8, 130.0], [20.9, 130.0], [21.0, 132.0], [21.1, 132.0], [21.2, 132.0], [21.3, 132.0], [21.4, 132.0], [21.5, 132.0], [21.6, 132.0], [21.7, 132.0], [21.8, 132.0], [21.9, 132.0], [22.0, 138.0], [22.1, 138.0], [22.2, 138.0], [22.3, 138.0], [22.4, 138.0], [22.5, 138.0], [22.6, 138.0], [22.7, 138.0], [22.8, 138.0], [22.9, 138.0], [23.0, 139.0], [23.1, 139.0], [23.2, 139.0], [23.3, 139.0], [23.4, 139.0], [23.5, 139.0], [23.6, 139.0], [23.7, 139.0], [23.8, 139.0], [23.9, 139.0], [24.0, 141.0], [24.1, 141.0], [24.2, 141.0], [24.3, 141.0], [24.4, 141.0], [24.5, 141.0], [24.6, 141.0], [24.7, 141.0], [24.8, 141.0], [24.9, 141.0], [25.0, 142.0], [25.1, 142.0], [25.2, 142.0], [25.3, 142.0], [25.4, 142.0], [25.5, 142.0], [25.6, 142.0], [25.7, 142.0], [25.8, 142.0], [25.9, 142.0], [26.0, 146.0], [26.1, 146.0], [26.2, 146.0], [26.3, 146.0], [26.4, 146.0], [26.5, 146.0], [26.6, 146.0], [26.7, 146.0], [26.8, 146.0], [26.9, 146.0], [27.0, 148.0], [27.1, 148.0], [27.2, 148.0], [27.3, 148.0], [27.4, 148.0], [27.5, 148.0], [27.6, 148.0], [27.7, 148.0], [27.8, 148.0], [27.9, 148.0], [28.0, 148.0], [28.1, 148.0], [28.2, 148.0], [28.3, 148.0], [28.4, 148.0], [28.5, 148.0], [28.6, 148.0], [28.7, 148.0], [28.8, 148.0], [28.9, 148.0], [29.0, 149.0], [29.1, 149.0], [29.2, 149.0], [29.3, 149.0], [29.4, 149.0], [29.5, 149.0], [29.6, 149.0], [29.7, 149.0], [29.8, 149.0], [29.9, 149.0], [30.0, 149.0], [30.1, 149.0], [30.2, 149.0], [30.3, 149.0], [30.4, 149.0], [30.5, 149.0], [30.6, 149.0], [30.7, 149.0], [30.8, 149.0], [30.9, 149.0], [31.0, 149.0], [31.1, 149.0], [31.2, 149.0], [31.3, 149.0], [31.4, 149.0], [31.5, 149.0], [31.6, 149.0], [31.7, 149.0], [31.8, 149.0], [31.9, 149.0], [32.0, 150.0], [32.1, 150.0], [32.2, 150.0], [32.3, 150.0], [32.4, 150.0], [32.5, 150.0], [32.6, 150.0], [32.7, 150.0], [32.8, 150.0], [32.9, 150.0], [33.0, 151.0], [33.1, 151.0], [33.2, 151.0], [33.3, 151.0], [33.4, 151.0], [33.5, 151.0], [33.6, 151.0], [33.7, 151.0], [33.8, 151.0], [33.9, 151.0], [34.0, 151.0], [34.1, 151.0], [34.2, 151.0], [34.3, 151.0], [34.4, 151.0], [34.5, 151.0], [34.6, 151.0], [34.7, 151.0], [34.8, 151.0], [34.9, 151.0], [35.0, 151.0], [35.1, 151.0], [35.2, 151.0], [35.3, 151.0], [35.4, 151.0], [35.5, 151.0], [35.6, 151.0], [35.7, 151.0], [35.8, 151.0], [35.9, 151.0], [36.0, 158.0], [36.1, 158.0], [36.2, 158.0], [36.3, 158.0], [36.4, 158.0], [36.5, 158.0], [36.6, 158.0], [36.7, 158.0], [36.8, 158.0], [36.9, 158.0], [37.0, 158.0], [37.1, 158.0], [37.2, 158.0], [37.3, 158.0], [37.4, 158.0], [37.5, 158.0], [37.6, 158.0], [37.7, 158.0], [37.8, 158.0], [37.9, 158.0], [38.0, 158.0], [38.1, 158.0], [38.2, 158.0], [38.3, 158.0], [38.4, 158.0], [38.5, 158.0], [38.6, 158.0], [38.7, 158.0], [38.8, 158.0], [38.9, 158.0], [39.0, 161.0], [39.1, 161.0], [39.2, 161.0], [39.3, 161.0], [39.4, 161.0], [39.5, 161.0], [39.6, 161.0], [39.7, 161.0], [39.8, 161.0], [39.9, 161.0], [40.0, 163.0], [40.1, 163.0], [40.2, 163.0], [40.3, 163.0], [40.4, 163.0], [40.5, 163.0], [40.6, 163.0], [40.7, 163.0], [40.8, 163.0], [40.9, 163.0], [41.0, 164.0], [41.1, 164.0], [41.2, 164.0], [41.3, 164.0], [41.4, 164.0], [41.5, 164.0], [41.6, 164.0], [41.7, 164.0], [41.8, 164.0], [41.9, 164.0], [42.0, 164.0], [42.1, 164.0], [42.2, 164.0], [42.3, 164.0], [42.4, 164.0], [42.5, 164.0], [42.6, 164.0], [42.7, 164.0], [42.8, 164.0], [42.9, 164.0], [43.0, 166.0], [43.1, 166.0], [43.2, 166.0], [43.3, 166.0], [43.4, 166.0], [43.5, 166.0], [43.6, 166.0], [43.7, 166.0], [43.8, 166.0], [43.9, 166.0], [44.0, 168.0], [44.1, 168.0], [44.2, 168.0], [44.3, 168.0], [44.4, 168.0], [44.5, 168.0], [44.6, 168.0], [44.7, 168.0], [44.8, 168.0], [44.9, 168.0], [45.0, 170.0], [45.1, 170.0], [45.2, 170.0], [45.3, 170.0], [45.4, 170.0], [45.5, 170.0], [45.6, 170.0], [45.7, 170.0], [45.8, 170.0], [45.9, 170.0], [46.0, 171.0], [46.1, 171.0], [46.2, 171.0], [46.3, 171.0], [46.4, 171.0], [46.5, 171.0], [46.6, 171.0], [46.7, 171.0], [46.8, 171.0], [46.9, 171.0], [47.0, 173.0], [47.1, 173.0], [47.2, 173.0], [47.3, 173.0], [47.4, 173.0], [47.5, 173.0], [47.6, 173.0], [47.7, 173.0], [47.8, 173.0], [47.9, 173.0], [48.0, 176.0], [48.1, 176.0], [48.2, 176.0], [48.3, 176.0], [48.4, 176.0], [48.5, 176.0], [48.6, 176.0], [48.7, 176.0], [48.8, 176.0], [48.9, 176.0], [49.0, 176.0], [49.1, 176.0], [49.2, 176.0], [49.3, 176.0], [49.4, 176.0], [49.5, 176.0], [49.6, 176.0], [49.7, 176.0], [49.8, 176.0], [49.9, 176.0], [50.0, 177.0], [50.1, 177.0], [50.2, 177.0], [50.3, 177.0], [50.4, 177.0], [50.5, 177.0], [50.6, 177.0], [50.7, 177.0], [50.8, 177.0], [50.9, 177.0], [51.0, 178.0], [51.1, 178.0], [51.2, 178.0], [51.3, 178.0], [51.4, 178.0], [51.5, 178.0], [51.6, 178.0], [51.7, 178.0], [51.8, 178.0], [51.9, 178.0], [52.0, 179.0], [52.1, 179.0], [52.2, 179.0], [52.3, 179.0], [52.4, 179.0], [52.5, 179.0], [52.6, 179.0], [52.7, 179.0], [52.8, 179.0], [52.9, 179.0], [53.0, 179.0], [53.1, 179.0], [53.2, 179.0], [53.3, 179.0], [53.4, 179.0], [53.5, 179.0], [53.6, 179.0], [53.7, 179.0], [53.8, 179.0], [53.9, 179.0], [54.0, 179.0], [54.1, 179.0], [54.2, 179.0], [54.3, 179.0], [54.4, 179.0], [54.5, 179.0], [54.6, 179.0], [54.7, 179.0], [54.8, 179.0], [54.9, 179.0], [55.0, 182.0], [55.1, 182.0], [55.2, 182.0], [55.3, 182.0], [55.4, 182.0], [55.5, 182.0], [55.6, 182.0], [55.7, 182.0], [55.8, 182.0], [55.9, 182.0], [56.0, 183.0], [56.1, 183.0], [56.2, 183.0], [56.3, 183.0], [56.4, 183.0], [56.5, 183.0], [56.6, 183.0], [56.7, 183.0], [56.8, 183.0], [56.9, 183.0], [57.0, 184.0], [57.1, 184.0], [57.2, 184.0], [57.3, 184.0], [57.4, 184.0], [57.5, 184.0], [57.6, 184.0], [57.7, 184.0], [57.8, 184.0], [57.9, 184.0], [58.0, 185.0], [58.1, 185.0], [58.2, 185.0], [58.3, 185.0], [58.4, 185.0], [58.5, 185.0], [58.6, 185.0], [58.7, 185.0], [58.8, 185.0], [58.9, 185.0], [59.0, 192.0], [59.1, 192.0], [59.2, 192.0], [59.3, 192.0], [59.4, 192.0], [59.5, 192.0], [59.6, 192.0], [59.7, 192.0], [59.8, 192.0], [59.9, 192.0], [60.0, 192.0], [60.1, 192.0], [60.2, 192.0], [60.3, 192.0], [60.4, 192.0], [60.5, 192.0], [60.6, 192.0], [60.7, 192.0], [60.8, 192.0], [60.9, 192.0], [61.0, 194.0], [61.1, 194.0], [61.2, 194.0], [61.3, 194.0], [61.4, 194.0], [61.5, 194.0], [61.6, 194.0], [61.7, 194.0], [61.8, 194.0], [61.9, 194.0], [62.0, 199.0], [62.1, 199.0], [62.2, 199.0], [62.3, 199.0], [62.4, 199.0], [62.5, 199.0], [62.6, 199.0], [62.7, 199.0], [62.8, 199.0], [62.9, 199.0], [63.0, 199.0], [63.1, 199.0], [63.2, 199.0], [63.3, 199.0], [63.4, 199.0], [63.5, 199.0], [63.6, 199.0], [63.7, 199.0], [63.8, 199.0], [63.9, 199.0], [64.0, 200.0], [64.1, 200.0], [64.2, 200.0], [64.3, 200.0], [64.4, 200.0], [64.5, 200.0], [64.6, 200.0], [64.7, 200.0], [64.8, 200.0], [64.9, 200.0], [65.0, 202.0], [65.1, 202.0], [65.2, 202.0], [65.3, 202.0], [65.4, 202.0], [65.5, 202.0], [65.6, 202.0], [65.7, 202.0], [65.8, 202.0], [65.9, 202.0], [66.0, 204.0], [66.1, 204.0], [66.2, 204.0], [66.3, 204.0], [66.4, 204.0], [66.5, 204.0], [66.6, 204.0], [66.7, 204.0], [66.8, 204.0], [66.9, 204.0], [67.0, 205.0], [67.1, 205.0], [67.2, 205.0], [67.3, 205.0], [67.4, 205.0], [67.5, 205.0], [67.6, 205.0], [67.7, 205.0], [67.8, 205.0], [67.9, 205.0], [68.0, 208.0], [68.1, 208.0], [68.2, 208.0], [68.3, 208.0], [68.4, 208.0], [68.5, 208.0], [68.6, 208.0], [68.7, 208.0], [68.8, 208.0], [68.9, 208.0], [69.0, 208.0], [69.1, 208.0], [69.2, 208.0], [69.3, 208.0], [69.4, 208.0], [69.5, 208.0], [69.6, 208.0], [69.7, 208.0], [69.8, 208.0], [69.9, 208.0], [70.0, 210.0], [70.1, 210.0], [70.2, 210.0], [70.3, 210.0], [70.4, 210.0], [70.5, 210.0], [70.6, 210.0], [70.7, 210.0], [70.8, 210.0], [70.9, 210.0], [71.0, 213.0], [71.1, 213.0], [71.2, 213.0], [71.3, 213.0], [71.4, 213.0], [71.5, 213.0], [71.6, 213.0], [71.7, 213.0], [71.8, 213.0], [71.9, 213.0], [72.0, 217.0], [72.1, 217.0], [72.2, 217.0], [72.3, 217.0], [72.4, 217.0], [72.5, 217.0], [72.6, 217.0], [72.7, 217.0], [72.8, 217.0], [72.9, 217.0], [73.0, 218.0], [73.1, 218.0], [73.2, 218.0], [73.3, 218.0], [73.4, 218.0], [73.5, 218.0], [73.6, 218.0], [73.7, 218.0], [73.8, 218.0], [73.9, 218.0], [74.0, 220.0], [74.1, 220.0], [74.2, 220.0], [74.3, 220.0], [74.4, 220.0], [74.5, 220.0], [74.6, 220.0], [74.7, 220.0], [74.8, 220.0], [74.9, 220.0], [75.0, 221.0], [75.1, 221.0], [75.2, 221.0], [75.3, 221.0], [75.4, 221.0], [75.5, 221.0], [75.6, 221.0], [75.7, 221.0], [75.8, 221.0], [75.9, 221.0], [76.0, 231.0], [76.1, 231.0], [76.2, 231.0], [76.3, 231.0], [76.4, 231.0], [76.5, 231.0], [76.6, 231.0], [76.7, 231.0], [76.8, 231.0], [76.9, 231.0], [77.0, 232.0], [77.1, 232.0], [77.2, 232.0], [77.3, 232.0], [77.4, 232.0], [77.5, 232.0], [77.6, 232.0], [77.7, 232.0], [77.8, 232.0], [77.9, 232.0], [78.0, 234.0], [78.1, 234.0], [78.2, 234.0], [78.3, 234.0], [78.4, 234.0], [78.5, 234.0], [78.6, 234.0], [78.7, 234.0], [78.8, 234.0], [78.9, 234.0], [79.0, 238.0], [79.1, 238.0], [79.2, 238.0], [79.3, 238.0], [79.4, 238.0], [79.5, 238.0], [79.6, 238.0], [79.7, 238.0], [79.8, 238.0], [79.9, 238.0], [80.0, 239.0], [80.1, 239.0], [80.2, 239.0], [80.3, 239.0], [80.4, 239.0], [80.5, 239.0], [80.6, 239.0], [80.7, 239.0], [80.8, 239.0], [80.9, 239.0], [81.0, 240.0], [81.1, 240.0], [81.2, 240.0], [81.3, 240.0], [81.4, 240.0], [81.5, 240.0], [81.6, 240.0], [81.7, 240.0], [81.8, 240.0], [81.9, 240.0], [82.0, 240.0], [82.1, 240.0], [82.2, 240.0], [82.3, 240.0], [82.4, 240.0], [82.5, 240.0], [82.6, 240.0], [82.7, 240.0], [82.8, 240.0], [82.9, 240.0], [83.0, 242.0], [83.1, 242.0], [83.2, 242.0], [83.3, 242.0], [83.4, 242.0], [83.5, 242.0], [83.6, 242.0], [83.7, 242.0], [83.8, 242.0], [83.9, 242.0], [84.0, 244.0], [84.1, 244.0], [84.2, 244.0], [84.3, 244.0], [84.4, 244.0], [84.5, 244.0], [84.6, 244.0], [84.7, 244.0], [84.8, 244.0], [84.9, 244.0], [85.0, 253.0], [85.1, 253.0], [85.2, 253.0], [85.3, 253.0], [85.4, 253.0], [85.5, 253.0], [85.6, 253.0], [85.7, 253.0], [85.8, 253.0], [85.9, 253.0], [86.0, 254.0], [86.1, 254.0], [86.2, 254.0], [86.3, 254.0], [86.4, 254.0], [86.5, 254.0], [86.6, 254.0], [86.7, 254.0], [86.8, 254.0], [86.9, 254.0], [87.0, 269.0], [87.1, 269.0], [87.2, 269.0], [87.3, 269.0], [87.4, 269.0], [87.5, 269.0], [87.6, 269.0], [87.7, 269.0], [87.8, 269.0], [87.9, 269.0], [88.0, 281.0], [88.1, 281.0], [88.2, 281.0], [88.3, 281.0], [88.4, 281.0], [88.5, 281.0], [88.6, 281.0], [88.7, 281.0], [88.8, 281.0], [88.9, 281.0], [89.0, 315.0], [89.1, 315.0], [89.2, 315.0], [89.3, 315.0], [89.4, 315.0], [89.5, 315.0], [89.6, 315.0], [89.7, 315.0], [89.8, 315.0], [89.9, 315.0], [90.0, 330.0], [90.1, 330.0], [90.2, 330.0], [90.3, 330.0], [90.4, 330.0], [90.5, 330.0], [90.6, 330.0], [90.7, 330.0], [90.8, 330.0], [90.9, 330.0], [91.0, 334.0], [91.1, 334.0], [91.2, 334.0], [91.3, 334.0], [91.4, 334.0], [91.5, 334.0], [91.6, 334.0], [91.7, 334.0], [91.8, 334.0], [91.9, 334.0], [92.0, 338.0], [92.1, 338.0], [92.2, 338.0], [92.3, 338.0], [92.4, 338.0], [92.5, 338.0], [92.6, 338.0], [92.7, 338.0], [92.8, 338.0], [92.9, 338.0], [93.0, 347.0], [93.1, 347.0], [93.2, 347.0], [93.3, 347.0], [93.4, 347.0], [93.5, 347.0], [93.6, 347.0], [93.7, 347.0], [93.8, 347.0], [93.9, 347.0], [94.0, 444.0], [94.1, 444.0], [94.2, 444.0], [94.3, 444.0], [94.4, 444.0], [94.5, 444.0], [94.6, 444.0], [94.7, 444.0], [94.8, 444.0], [94.9, 444.0], [95.0, 537.0], [95.1, 537.0], [95.2, 537.0], [95.3, 537.0], [95.4, 537.0], [95.5, 537.0], [95.6, 537.0], [95.7, 537.0], [95.8, 537.0], [95.9, 537.0], [96.0, 637.0], [96.1, 637.0], [96.2, 637.0], [96.3, 637.0], [96.4, 637.0], [96.5, 637.0], [96.6, 637.0], [96.7, 637.0], [96.8, 637.0], [96.9, 637.0], [97.0, 763.0], [97.1, 763.0], [97.2, 763.0], [97.3, 763.0], [97.4, 763.0], [97.5, 763.0], [97.6, 763.0], [97.7, 763.0], [97.8, 763.0], [97.9, 763.0], [98.0, 795.0], [98.1, 795.0], [98.2, 795.0], [98.3, 795.0], [98.4, 795.0], [98.5, 795.0], [98.6, 795.0], [98.7, 795.0], [98.8, 795.0], [98.9, 795.0], [99.0, 800.0], [99.1, 800.0], [99.2, 800.0], [99.3, 800.0], [99.4, 800.0], [99.5, 800.0], [99.6, 800.0], [99.7, 800.0], [99.8, 800.0], [99.9, 800.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 61.0, "series": [{"data": [[0.0, 3.0], [600.0, 1.0], [300.0, 5.0], [700.0, 2.0], [800.0, 1.0], [400.0, 1.0], [200.0, 25.0], [100.0, 61.0], [500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 5.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 95.0, "series": [{"data": [[0.0, 95.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 5.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 9.4, "minX": 1.71563142E12, "maxY": 9.4, "series": [{"data": [[1.71563142E12, 9.4]], "isOverall": false, "label": "Server Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71563142E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 85.33333333333333, "minX": 2.0, "maxY": 232.0, "series": [{"data": [[8.0, 186.0], [4.0, 110.5], [2.0, 85.33333333333333], [9.0, 232.0], [10.0, 218.70454545454544], [5.0, 113.0], [6.0, 158.0], [3.0, 99.0], [7.0, 126.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.4, 208.23000000000002]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 205.0, "minX": 1.71563142E12, "maxY": 784080.0, "series": [{"data": [[1.71563142E12, 784080.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71563142E12, 205.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71563142E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 208.23000000000002, "minX": 1.71563142E12, "maxY": 208.23000000000002, "series": [{"data": [[1.71563142E12, 208.23000000000002]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71563142E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 202.07000000000008, "minX": 1.71563142E12, "maxY": 202.07000000000008, "series": [{"data": [[1.71563142E12, 202.07000000000008]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71563142E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.5099999999999999, "minX": 1.71563142E12, "maxY": 0.5099999999999999, "series": [{"data": [[1.71563142E12, 0.5099999999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71563142E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 74.0, "minX": 1.71563142E12, "maxY": 800.0, "series": [{"data": [[1.71563142E12, 800.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71563142E12, 328.5000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71563142E12, 799.9499999999999]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71563142E12, 532.349999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.71563142E12, 74.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71563142E12, 176.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71563142E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 126.0, "minX": 17.0, "maxY": 248.5, "series": [{"data": [[17.0, 126.0], [26.0, 248.5], [57.0, 168.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 57.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 125.0, "minX": 17.0, "maxY": 241.5, "series": [{"data": [[17.0, 125.0], [26.0, 241.5], [57.0, 165.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 57.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.71563142E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.71563142E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71563142E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.71563142E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.71563142E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71563142E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.71563142E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.71563142E12, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71563142E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.71563142E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.71563142E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71563142E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

