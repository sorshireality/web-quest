<script src="../scripts/desktop.js" type="text/javascript"></script>
<div class="pixelify-sans-desktop">
    <div id="desktop-container">
        <div id="desktop-bar">
            <div id="desktop-bar-app-menu">

            </div>
            <div id="desktop-bar-system-data">
                <div id="desktop-bar-system-data-datetime">
                    <span id="desktop-bar-system-data-datetime-obj">  <?php echo date('Y-m-d g:i') ?></span>
                </div>
            </div>
        </div>
        <div id="desktop-body">
            <div id="desktop-body-container">
                <div id="desktop-body-content">
                    <div class="desktop-app-tab" id="puzzle-app">
                        <div class="desktop-app-tab-header">
                            <div class="desktop-app-tab-header-name">~puzzle app~</div>
                            <div class="desktop-app-tab-header-close" id="close-app-puzzle">X</div>
                        </div>
                        <div class="desktop-app-tab-content">
                            <img src="../img/CyberTimesExclusive.png" alt="">

                            <p class="p10">March 10, '84 - A leap in computing! The ZX Spectrum, with 48K memory, hits the market.
                                Priced at just $199, it's a steal. Visit us at 16-bit Avenue to grab yours.</p>
                            <br>
                            <p class="p10">Quick bytes:</p>

                            <ul class="p20">
                                <li class="p10">New game "Space Quest" at line 20, column 5 of code.</li>
                                <li class="p10">Giga Corp stocks up by 3.7%.</li>
                                <li class="p10">Hackathon winner decodes mystery '101001' message.</li>
                            </ul>

                        </div>
                    </div>
                    <div class="desktop-app-tab" id="crypt-app">
                        <div class="desktop-app-tab-header">
                            <div class="desktop-app-tab-header-name">~crypt app~</div>
                            <div class="desktop-app-tab-header-close" id="close-app-crypt">X</div>
                        </div>
                        <div class="desktop-app-tab-content">
                            <div id="desktop-app-crypt-code">
                                <p>function crypt() {</p>
                                <p class="p20">let a = {</p>
                                <p class="p40"> size: 7</p>
                                <p class="p20">};</p>
                                <br>
                                <p class="p20">let b = {</p>
                                <p class="p40"> size: 6</p>
                                <p class="p20">};</p>
                                <br>
                                <p class="p20" id="crypt-code-line-edit">console.log(a > b);</p>
                                <p>}</p>
                                <p>crypt();</p>
                                <br>

                            </div>
                            <div id="desktop-app-crypt-code-output" class="error">Error!</div>
                        </div>
                    </div>
                    <div class="desktop-app-tab" id="system-app">
                        <div class="desktop-app-tab-header">
                            <div class="desktop-app-tab-header-name">~system~</div>
                            <div class="desktop-app-tab-header-close" id="close-app-system">X</div>
                        </div>
                        <div class="desktop-app-tab-content">
                            <form action="" id="system-form">
                                <input type="text" maxlength="1" name="first">
                                <input type="text" maxlength="1" name="second">
                                <input type="text" maxlength="1" name="third">
                                <input type="text" maxlength="1" name="fourth">
                            </form>
                            <input type="submit" value="Login" id="system-login-button">
                        </div>
                    </div>
                    <div class="desktop-app-tab" id="recryptor-app">
                        <div class="desktop-app-tab-header">
                            <div class="desktop-app-tab-header-name">~recryptor app~</div>
                            <div class="desktop-app-tab-header-close" id="close-app-recryptor">X</div>
                        </div>
                        <div class="desktop-app-tab-content">
                            <div class="hints" id="hint-1"></div>
                            <div class="hints" id="hint-2"></div>
                            <div class="hints" id="hint-3"></div>
                        </div>
                    </div>
                    <div class="desktop-icon">
                        <div class="desktop-icon-pct" id="puzzle-icon"></div>
                        <div class="desktop-icon-label">Puzzle</div>
                    </div>
                    <div class="desktop-icon">
                        <div class="desktop-icon-pct" id="crypt-icon"></div>
                        <div class="desktop-icon-label">Crypt</div>
                    </div>
                    <div class="desktop-icon">
                        <div class="desktop-icon-pct" id="system-icon"></div>
                        <div class="desktop-icon-label">System</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>