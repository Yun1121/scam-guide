document.addEventListener('DOMContentLoaded', function() {
    // Global variables
    let currentPage = document.querySelector('.page.active');
    let previousPages = [];

    // Navigation functions
    function navigateTo(pageId) {
        // Store current page for back navigation
        previousPages.push(currentPage.id);
        
        // Hide current page
        currentPage.classList.remove('active');
        
        // Show target page
        const targetPage = document.getElementById(pageId);
        targetPage.classList.add('active');
        
        // Update current page reference
        currentPage = targetPage;
        
        // Scroll to top
        window.scrollTo(0, 0);
    }

    function navigateBack() {
        if (previousPages.length > 0) {
            const prevPageId = previousPages.pop();
            
            // Hide current page
            currentPage.classList.remove('active');
            
            // Show previous page
            const prevPage = document.getElementById(prevPageId);
            prevPage.classList.add('active');
            
            // Update current page reference
            currentPage = prevPage;
            
            // Scroll to top
            window.scrollTo(0, 0);
        } else {
            navigateTo('homepage');
        }
    }

    // Show success message overlay
    function showSuccessMessage(message) {
        const overlay = document.getElementById('success-overlay');
        const messageEl = document.getElementById('success-message');
        
        messageEl.textContent = message;
        overlay.classList.add('active');
        
        setTimeout(() => {
            overlay.classList.remove('active');
        }, 2000);
    }

    // Voice Assistant
    const voiceButton = document.getElementById('voice-assistant-button');
    const endVoiceButton = document.getElementById('end-voice-button');

    voiceButton.addEventListener('click', function() {
        navigateTo('voice-interface');
        
        // Simulate AI listening and then responding after a delay
        setTimeout(() => {
            const responseContainer = document.querySelector('.ai-response');
            const responseText = document.querySelector('.response-text');
            
            // Set the response text
            responseText.textContent = "I heard you asking about housing issues. Are you looking for information about 'Housing & Renting'? Say yes or no.";
            
            // Trigger animation
            setTimeout(() => {
                responseContainer.classList.add('visible');
                
                // Simulate user saying "yes" after a delay
                setTimeout(() => {
                    // Show success message before navigating
                    showSuccessMessage("Processing your response...");
                    
                    setTimeout(() => {
                        navigateTo('housing-page');
                    }, 1000);
                }, 3000);
            }, 300);
        }, 2000);
    });

    endVoiceButton.addEventListener('click', function() {
        navigateTo('homepage');
    });

    // Accessibility Panel
    const accessibilityButtons = document.querySelectorAll('.accessibility-button, #accessibility-button');
    const closeAccessibilityButton = document.getElementById('close-accessibility-panel');
    const fontSizeButtons = document.querySelectorAll('.font-size-button');
    const contrastButtons = document.querySelectorAll('.contrast-button');

    accessibilityButtons.forEach(button => {
        button.addEventListener('click', function() {
            navigateTo('accessibility-panel');
        });
    });

    closeAccessibilityButton.addEventListener('click', function() {
        navigateBack();
    });

    fontSizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all font buttons
            fontSizeButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get font size from data attribute
            const fontSize = this.getAttribute('data-size');
            
            // Remove all font size classes from body
            document.body.classList.remove('standard-font', 'large-font', 'larger-font', 'largest-font');
            
            // Add the selected font size class
            if (fontSize !== 'standard') {
                document.body.classList.add(fontSize + '-font');
            } else {
                document.body.classList.add('standard-font');
            }
        });
    });

    contrastButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all contrast buttons
            contrastButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get contrast mode from data attribute
            const contrast = this.getAttribute('data-contrast');
            
            // Remove all contrast mode classes from body
            document.body.classList.remove('default-contrast', 'high-contrast');
            
            // Add the selected contrast mode class
            document.body.classList.add(contrast + '-contrast');
        });
    });

    // Category navigation
    const housingCategory = document.getElementById('housing-category');
    housingCategory.addEventListener('click', function() {
        navigateTo('housing-page');
    });

    const communityCategory = document.getElementById('community-category');
    communityCategory.addEventListener('click', function() {
        navigateTo('community-page');
    });
    
    // Add event listeners for Shopping & Consumer and Scams & Fraud categories
    const shoppingCategory = document.getElementById('shopping-category');
    shoppingCategory.addEventListener('click', function() {
        navigateTo('shopping-page');
    });
    
    const scamsCategory = document.getElementById('scams-category');
    scamsCategory.addEventListener('click', function() {
        navigateTo('scams-page');
    });

    // Back buttons
    const backButtons = document.querySelectorAll('.back-button');
    backButtons.forEach(button => {
        button.addEventListener('click', navigateBack);
    });

    // Home buttons
    const homeButtons = document.querySelectorAll('.home-button');
    homeButtons.forEach(button => {
        button.addEventListener('click', function() {
            navigateTo('homepage');
        });
    });

    // Housing page interactions
    const repairsTopic = document.getElementById('repairs-topic');
    repairsTopic.addEventListener('click', function() {
        navigateTo('repairs-guide-page');
    });

    // Shopping page interactions
    const faultyProductsTopic = document.getElementById('faulty-products-topic');
    if (faultyProductsTopic) {
        faultyProductsTopic.addEventListener('click', function() {
            navigateTo('faulty-products-guide-page');
        });
    }

    // Guide page interactions
    const readAloudButton = document.getElementById('read-aloud-button');
    readAloudButton.addEventListener('click', function() {
        showSuccessMessage('Reading content aloud...');
    });

    const saveGuideButton = document.getElementById('save-guide-button');
    saveGuideButton.addEventListener('click', function() {
        showSuccessMessage('Guide saved to your account!');
    });

    const downloadTemplateButton = document.getElementById('download-template-button');
    downloadTemplateButton.addEventListener('click', function() {
        showSuccessMessage('Download started!');
    });

    // Faulty Products Guide page interactions
    const readAloudFaultyButton = document.getElementById('read-aloud-faulty-button');
    if (readAloudFaultyButton) {
        readAloudFaultyButton.addEventListener('click', function() {
            showSuccessMessage('Reading content aloud...');
        });
    }

    const saveFaultyGuideButton = document.getElementById('save-faulty-guide-button');
    if (saveFaultyGuideButton) {
        saveFaultyGuideButton.addEventListener('click', function() {
            showSuccessMessage('Guide saved to your account!');
        });
    }

    const downloadComplaintTemplateButton = document.getElementById('download-complaint-template-button');
    if (downloadComplaintTemplateButton) {
        downloadComplaintTemplateButton.addEventListener('click', function() {
            showSuccessMessage('Complaint template download started!');
        });
    }
    
    // Account page interactions - Saved Guides
    const faultyProductsSaved = document.getElementById('faulty-products-saved');
    if (faultyProductsSaved) {
        faultyProductsSaved.addEventListener('click', function() {
            navigateTo('faulty-products-guide-page');
        });
    }

    // Community page interactions
    const volunteerOption = document.getElementById('volunteer-option');
    volunteerOption.addEventListener('click', function() {
        navigateTo('volunteer-page');
    });

    // Ask a volunteer page interactions
    const submitQuestionButton = document.getElementById('submit-question');
    submitQuestionButton.addEventListener('click', function() {
        showSuccessMessage('Your question has been submitted!');
        setTimeout(() => {
            navigateTo('homepage');
        }, 2000);
    });

    // Login related interactions
    const loginButtons = document.querySelectorAll('.login-button, #login-button');
    loginButtons.forEach(button => {
        button.addEventListener('click', function() {
            navigateTo('login-page');
        });
    });

    const loginSubmitButton = document.getElementById('login-submit');
    loginSubmitButton.addEventListener('click', function() {
        navigateTo('account-page');
    });

    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            navigateTo('homepage');
        });
    }

    // Home search functionality
    const homeSearchButton = document.getElementById('home-search-button');
    if (homeSearchButton) {
        homeSearchButton.addEventListener('click', function() {
            const searchInput = document.querySelector('.home-search-input');
            const searchQuery = searchInput.value.trim().toLowerCase();
            
            if (searchQuery) {
                // Simple search logic - you could expand this
                if (searchQuery.includes('housing') || searchQuery.includes('rent')) {
                    navigateTo('housing-page');
                } else if (searchQuery.includes('scam') || searchQuery.includes('fraud')) {
                    navigateTo('scams-page');
                } else if (searchQuery.includes('shop') || searchQuery.includes('consumer')) {
                    navigateTo('shopping-page');
                } else if (searchQuery.includes('community') || searchQuery.includes('help')) {
                    navigateTo('community-page');
                } else {
                    showSuccessMessage('Searching for: ' + searchQuery);
                }
            } else {
                showSuccessMessage('Please enter a search term');
            }
        });
        
        // Add enter key functionality
        const homeSearchInput = document.querySelector('.home-search-input');
        if (homeSearchInput) {
            homeSearchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    homeSearchButton.click();
                }
            });
        }
    }

    // My Questions interaction
    const questionsItem = document.getElementById('go-to-questions');
    if (questionsItem) {
        questionsItem.addEventListener('click', function() {
            navigateTo('question-details-page');
        });
    }

    // Emergency section interactions
    const reportScamButton = document.getElementById('report-scam-button');
    if (reportScamButton) {
        reportScamButton.addEventListener('click', function() {
            showSuccessMessage('Emergency contact information provided!');
        });
    }

    // Shopping page topic interactions
    const returnsTopicCard = document.getElementById('returns-topic');
    if (returnsTopicCard) {
        returnsTopicCard.addEventListener('click', function() {
            showSuccessMessage('Returns & Refunds guide coming soon!');
        });
    }

    const misleadingAdsTopicCard = document.getElementById('misleading-ads-topic');
    if (misleadingAdsTopicCard) {
        misleadingAdsTopicCard.addEventListener('click', function() {
            showSuccessMessage('Misleading Ads & False Claims guide coming soon!');
        });
    }

    const contractsTopicCard = document.getElementById('contracts-topic');
    if (contractsTopicCard) {
        contractsTopicCard.addEventListener('click', function() {
            showSuccessMessage('Contracts & Service Agreements guide coming soon!');
        });
    }

    // Shopping page tool interactions
    const rightsCheckerTool = document.getElementById('rights-checker-tool');
    if (rightsCheckerTool) {
        rightsCheckerTool.addEventListener('click', function() {
            showSuccessMessage('Consumer Rights Checker Tool coming soon!');
        });
    }

    const complaintTemplates = document.getElementById('complaint-templates');
    if (complaintTemplates) {
        complaintTemplates.addEventListener('click', function() {
            showSuccessMessage('Complaint Letter Templates download starting soon!');
        });
    }

    // Scams page topic interactions
    const phoneScamsTopic = document.getElementById('phone-scams-topic');
    if (phoneScamsTopic) {
        phoneScamsTopic.addEventListener('click', function() {
            showSuccessMessage('Phone & SMS Scams guide coming soon!');
        });
    }

    const onlineScamsTopic = document.getElementById('online-scams-topic');
    if (onlineScamsTopic) {
        onlineScamsTopic.addEventListener('click', function() {
            showSuccessMessage('Online & Shopping Scams guide coming soon!');
        });
    }

    const relationshipScamsTopic = document.getElementById('relationship-scams-topic');
    if (relationshipScamsTopic) {
        relationshipScamsTopic.addEventListener('click', function() {
            showSuccessMessage('Dating & Investment Scams guide coming soon!');
        });
    }

    const unexpectedScamsTopic = document.getElementById('unexpected-scams-topic');
    if (unexpectedScamsTopic) {
        unexpectedScamsTopic.addEventListener('click', function() {
            showSuccessMessage('Unexpected Bills & Prize Scams guide coming soon!');
        });
    }

    // Scams page protection guides interactions
    const personalInfoProtection = document.getElementById('personal-info-protection');
    if (personalInfoProtection) {
        personalInfoProtection.addEventListener('click', function() {
            showSuccessMessage('Personal Information Protection guide coming soon!');
        });
    }

    const verifyWebsite = document.getElementById('verify-website');
    if (verifyWebsite) {
        verifyWebsite.addEventListener('click', function() {
            showSuccessMessage('Website Verification guide coming soon!');
        });
    }

    // Close overlay button
    const closeOverlayButtons = document.querySelectorAll('.close-overlay');
    closeOverlayButtons.forEach(button => {
        button.addEventListener('click', function() {
            document.getElementById('success-overlay').classList.remove('active');
        });
    });
}); 