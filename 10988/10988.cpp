#include <iostream>
#include <string>

using namespace std;

int main()
{
    string S;

    cin >> S;
    for(int a=0;a<S.length()/2;a++)
    {
        if(S[S.length()-a-1] != S[a])
        {
            cout << "0\n";
            return 0;
        }
    } 
    cout << "1\n";   
    return 0;
}